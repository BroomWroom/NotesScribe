import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from '@/components/SplashScreen';
import { Navbar } from '@/components/Navbar';
import { PinboardView } from '@/components/PinboardView';
import { NoteModal } from '@/components/NoteModal';
import { StickerDrawer } from '@/components/stickers/StickerDrawer';
import { ScrapbookBackground } from '@/components/ScrapbookBackground';
import { Note, Board, PlacedSticker } from '@/types/note';
import {
  getStoredNotes,
  saveStoredNotes,
  getStoredBoards,
  saveStoredBoards,
  getActiveBoardId,
  saveActiveBoardId,
  getStoredStickers,
  saveStoredStickers,
} from '@/utils/storage';

const CATEGORIES = ['All', 'Quotes', 'Botanical', 'Ticket', 'Journal', 'Memories', 'Collect'];

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [boards, setBoards] = useState<Board[]>(() => getStoredBoards());
  const [activeBoardId, setActiveBoardId] = useState<string>(() => getActiveBoardId());
  const [notes, setNotes] = useState<Note[]>(() => getStoredNotes());
  const [stickers, setStickers] = useState<PlacedSticker[]>(() => getStoredStickers());
  const [isStickerDrawerOpen, setIsStickerDrawerOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Dark mode state (persisted)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Persist boards & active board
  useEffect(() => {
    saveStoredBoards(boards);
  }, [boards]);

  useEffect(() => {
    saveActiveBoardId(activeBoardId);
  }, [activeBoardId]);

  // Persist notes
  useEffect(() => {
    saveStoredNotes(notes);
  }, [notes]);

  // Persist stickers
  useEffect(() => {
    saveStoredStickers(stickers);
  }, [stickers]);

  // Filter notes for the active board
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // Board filter
      if ((note.boardId || 'board-1') !== activeBoardId) return false;
      if (note.isArchived) return false;

      // Category filter
      if (selectedCategory !== 'All' && note.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag && !note.tags?.includes(selectedTag)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = note.title.toLowerCase().includes(q);
        const matchContent = note.content.toLowerCase().includes(q);
        const matchTags = note.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchContent && !matchTags) {
          return false;
        }
      }

      return true;
    });
  }, [notes, activeBoardId, selectedCategory, selectedTag, searchQuery]);

  // Filter stickers for the active board
  const activeBoardStickers = useMemo(() => {
    return stickers.filter((s) => (s.boardId || 'board-1') === activeBoardId);
  }, [stickers, activeBoardId]);

  // Board actions
  const handleCreateBoard = (title: string) => {
    const newBoard: Board = {
      id: `board-${Date.now()}`,
      title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setBoards((prev) => [...prev, newBoard]);
    setActiveBoardId(newBoard.id);
  };

  const handleDeleteBoard = (id: string) => {
    if (boards.length <= 1) return;
    const remaining = boards.filter((b) => b.id !== id);
    setBoards(remaining);
    if (activeBoardId === id) {
      setActiveBoardId(remaining[0].id);
    }
  };

  const handleRenameBoard = (id: string, newTitle: string) => {
    setBoards((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, title: newTitle, updatedAt: new Date().toISOString() }
          : b
      )
    );
  };

  // Note actions
  const handleSaveNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }) => {
    if (noteData.id) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === noteData.id
            ? {
                ...n,
                ...noteData,
                updatedAt: new Date().toISOString(),
              }
            : n
        )
      );
    } else {
      const currentBoardCount = notes.filter(
        (n) => (n.boardId || 'board-1') === activeBoardId && !n.isPinned
      ).length;
      const newNote: Note = {
        ...noteData,
        id: `scrapbook-${Date.now()}`,
        boardId: activeBoardId,
        position: {
          x: 40 + (currentBoardCount % 3) * 350,
          y: 40 + Math.floor(currentBoardCount / 3) * 320,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setNotes((prev) => [newNote, ...prev]);
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleTogglePin = (id: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isPinned: !n.isPinned } : n))
    );
  };

  const handlePositionChange = (noteId: string, pos: { x: number; y: number }) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === noteId
          ? { ...n, position: pos, updatedAt: new Date().toISOString() }
          : n
      )
    );
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  // Sticker actions
  const handleAddSticker = (stickerType: string) => {
    const currentCount = activeBoardStickers.length;
    const newSticker: PlacedSticker = {
      id: `sticker-${Date.now()}`,
      boardId: activeBoardId,
      stickerType,
      x: 180 + (currentCount % 4) * 160 + (Math.floor(Math.random() * 40) - 20),
      y: 120 + Math.floor(currentCount / 4) * 120 + (Math.floor(Math.random() * 30) - 15),
      rotation: Math.floor(Math.random() * 16) - 8,
      scale: 1,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleUpdateStickerPosition = (id: string, pos: { x: number; y: number }) => {
    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...pos } : s))
    );
  };

  const handleUpdateStickerRotation = (id: string, rotation: number) => {
    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, rotation } : s))
    );
  };

  const handleDeleteSticker = (id: string) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen text-[#312419] dark:text-[#ede4d8] transition-colors selection:bg-[#cfa37d] selection:text-white relative">
      {/* Revamped Vintage Scrapbook Collage Background */}
      <ScrapbookBackground />

      {/* Intro Handwriting Animation */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCreateModal={handleOpenCreateModal}
        onOpenStickerDrawer={() => setIsStickerDrawerOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onReplayIntro={() => setShowSplash(true)}
        totalNotes={filteredNotes.length}
      />

      {/* Main Scrapbook Desk Canvas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center">
        {/* Category Rubber Stamp / Manila Filters */}
        <div className="w-full flex items-center justify-between gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#7b5037] text-white shadow-sm border border-[#5d3c2a] font-bold'
                      : 'bg-[#ede3d1]/80 dark:bg-[#251d17]/80 border border-[#d6c4ae] dark:border-[#423226] text-[#614734] dark:text-[#c4ae9b] hover:bg-[#e4d7c2] dark:hover:bg-[#2f231b]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs font-mono text-[#8c6748] hover:underline font-semibold whitespace-nowrap"
            >
              Clear tag #{selectedTag}
            </button>
          )}
        </div>

        {/* Spread Out Pinboard / Scrapbook Canvas with Multi-Board and Stickers */}
        <PinboardView
          boards={boards}
          activeBoardId={activeBoardId}
          onSelectBoard={setActiveBoardId}
          onCreateBoard={handleCreateBoard}
          onDeleteBoard={handleDeleteBoard}
          onRenameBoard={handleRenameBoard}
          notes={filteredNotes}
          stickers={activeBoardStickers}
          onPositionChange={handlePositionChange}
          onUpdateStickerPosition={handleUpdateStickerPosition}
          onUpdateStickerRotation={handleUpdateStickerRotation}
          onDeleteSticker={handleDeleteSticker}
          onOpenStickerDrawer={() => setIsStickerDrawerOpen(true)}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
          onTogglePin={handleTogglePin}
          onCreateNew={handleOpenCreateModal}
        />
      </main>

      {/* Note Creation / Editing Modal */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
        onDelete={handleDeleteNote}
        editingNote={editingNote}
      />

      {/* Scrapbook Ephemera & Sticker Drawer */}
      <StickerDrawer
        isOpen={isStickerDrawerOpen}
        onClose={() => setIsStickerDrawerOpen(false)}
        onAddSticker={handleAddSticker}
      />
    </div>
  );
}

export default App;
