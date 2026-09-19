import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Pin, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Note, NoteColor, COLOR_CONFIG } from '@/types/note';
import { Button } from '@/components/ui/button';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }) => void;
  onDelete?: (id: string) => void;
  editingNote?: Note | null;
}

const CATEGORIES: Array<Note['category']> = [
  'Quotes',
  'Botanical',
  'Ticket',
  'Journal',
  'Memories',
  'Collect',
];

const COLOR_OPTIONS: NoteColor[] = ['kraft', 'parchment', 'sage', 'terracotta', 'blueprint', 'espresso'];

const SCRAPBOOK_PROMPTS = [
  {
    title: 'Pressed Woodland Fern',
    content: 'Specimen: Polypodiopsida frond.\nCollected at the edge of the mist pine forest. Dried under cedar boards for 21 days.',
    category: 'Botanical' as const,
  },
  {
    title: 'Life without love is like a tree without blossoms.',
    content: '"You are always there for me when things tend to go wrong. It\'s that faith that keeps my spirit alive."',
    category: 'Quotes' as const,
  },
  {
    title: 'Interstellar Night Train Slip',
    content: 'COUPON NO. 73-31-44-01\nValid for all journeys. Keep this ticket safe between the book leaves.',
    category: 'Ticket' as const,
  },
  {
    title: 'Treasure every moment you have.',
    content: 'COLLECT. No. 04\nPostage registered stamp. Morning tea, classical violin sonatas, and warm candlelight.',
    category: 'Collect' as const,
  },
];

export const NoteModal: React.FC<NoteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  editingNote,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<Note['category']>('Journal');
  const [color, setColor] = useState<NoteColor>('kraft');
  const [isPinned, setIsPinned] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category);
      setColor(editingNote.color);
      setIsPinned(editingNote.isPinned);
      setTags(editingNote.tags || []);
    } else {
      setTitle('');
      setContent('');
      setCategory('Journal');
      setColor('kraft');
      setIsPinned(false);
      setTags([]);
    }
  }, [editingNote, isOpen]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim().toLowerCase().replace(/^#/, '');
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDownTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handlePromptClick = () => {
    const random = SCRAPBOOK_PROMPTS[Math.floor(Math.random() * SCRAPBOOK_PROMPTS.length)];
    setTitle(random.title);
    setContent(random.content);
    setCategory(random.category);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    // Warm craft confetti
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.65 },
      colors: ['#b5845c', '#c8b376', '#608f65', '#b86e58', '#507e93'],
    });

    onSave({
      id: editingNote?.id,
      title: title.trim() || 'Untitled Scrap',
      content: content.trim(),
      category,
      color,
      isPinned,
      isArchived: editingNote?.isArchived || false,
      tags,
    });

    onClose();
  };

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;

  if (!isOpen) return null;

  const currentTheme = COLOR_CONFIG[color] || COLOR_CONFIG.kraft;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Warm Ambient Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1f1915]/60 backdrop-blur-xs"
        />

        {/* Scrapbook Sheet Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 24, stiffness: 280 }}
          className={`relative w-full max-w-xl rounded-2xl border-2 p-6 sm:p-8 z-10 overflow-visible shadow-2xl ${currentTheme.cardBg}`}
          style={{ borderColor: currentTheme.borderColor }}
        >
          {/* Washi Masking Tape on Top Header */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div
              className="w-28 h-7 washi-tape-lace flex items-center justify-center transform -rotate-1"
              style={{
                backgroundColor: currentTheme.tapeColor,
              }}
            >
              <div className="w-full border-t border-dashed opacity-40 border-[#7b5037]" />
            </div>
          </div>

          {/* Modal Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-current/10 pt-1">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-75">
                {editingNote ? 'Edit Scrap' : 'New Scrap Sheet'}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Creative Prompt */}
              {!editingNote && (
                <button
                  type="button"
                  onClick={handlePromptClick}
                  className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 text-xs font-mono font-semibold hover:bg-black/10 transition-colors"
                  title="Insert a scrapbook prompt"
                >
                  Idea Prompt
                </button>
              )}

              {/* Pin */}
              <button
                type="button"
                onClick={() => setIsPinned(!isPinned)}
                className={`p-1.5 rounded-md transition-colors ${
                  isPinned
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
                    : 'opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
                title={isPinned ? 'Pinned highlight' : 'Pin to top shelf'}
              >
                <Pin className={`w-4 h-4 ${isPinned ? 'fill-amber-600' : ''}`} />
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-md opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            {/* Title */}
            <div>
              <input
                type="text"
                placeholder="Title of this scrap..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                className="w-full text-xl font-bold tracking-tight bg-transparent border-b border-current/15 focus:border-[#8c6748] focus:outline-none pb-1 placeholder:opacity-40"
              />
            </div>

            {/* Note Canvas with Word / Char Counter */}
            <div className="relative">
              <textarea
                placeholder="Pen your thoughts, memories, sketches..."
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full text-sm rounded-xl p-4 bg-black/5 dark:bg-white/5 border border-current/10 focus:outline-none focus:ring-1 focus:ring-[#8c6748] resize-none leading-relaxed font-normal"
              />

              <div className="absolute bottom-3 right-3 font-mono text-[10px] opacity-60 bg-white/70 dark:bg-black/40 px-2 py-0.5 rounded-md border border-current/10">
                {wordCount} words • {charCount} chars
              </div>
            </div>

            {/* Paper Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-xs font-bold uppercase tracking-wider opacity-75">
                  Paper Texture & Tint
                </label>
                <span className="font-mono text-[11px] opacity-65">
                  {currentTheme.label}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {COLOR_OPTIONS.map((c) => {
                  const conf = COLOR_CONFIG[c];
                  const isSelected = color === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`relative w-8 h-8 rounded-md transition-transform flex items-center justify-center border border-black/20 ${
                        isSelected
                          ? 'scale-120 ring-2 ring-offset-2 ring-[#7b5037] shadow-sm'
                          : 'hover:scale-110 opacity-75 hover:opacity-100'
                      }`}
                      style={{ background: conf.dotColor }}
                      title={conf.label}
                    >
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rubber Stamp Category Selection */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase tracking-wider opacity-75 mb-2">
                Rubber Stamp Category
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat, idx) => {
                  const isSelected = category === cat;
                  const rot = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all transform ${rot} ${
                        isSelected
                          ? 'bg-[#7b5037] text-white shadow-sm border border-[#5d3c2a] scale-105'
                          : 'border border-current/25 bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tags Input */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase tracking-wider opacity-75 mb-2">
                Scrapbook Tags
              </label>
              <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-current/10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm bg-black/10 dark:bg-white/10 font-mono text-xs font-medium"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-600 ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder={tags.length === 0 ? 'Type tag and press Enter...' : ''}
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleKeyDownTag}
                  className="flex-1 min-w-[120px] bg-transparent text-xs focus:outline-none px-1"
                />
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-current/10">
              {editingNote && onDelete ? (
                <button
                  type="button"
                  onClick={() => {
                    onDelete(editingNote.id);
                    onClose();
                  }}
                  className="flex items-center gap-1 text-xs font-mono text-rose-700 hover:text-rose-800 font-semibold p-2 rounded-md hover:bg-rose-100/50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Discard Scrap</span>
                </button>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2">
                <Button type="button" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="craft" className="shadow-sm px-5">
                  <span>{editingNote ? 'Save Scrap' : 'Paste to Album'}</span>
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
