import React, { useState } from 'react';
import { Board } from '@/types/note';
import { Plus, Trash2, Edit2, Check, X, BookOpen } from 'lucide-react';

interface BoardTabsProps {
  boards: Board[];
  activeBoardId: string;
  onSelectBoard: (id: string) => void;
  onCreateBoard: (title: string) => void;
  onDeleteBoard: (id: string) => void;
  onRenameBoard: (id: string, newTitle: string) => void;
}

export const BoardTabs: React.FC<BoardTabsProps> = ({
  boards,
  activeBoardId,
  onSelectBoard,
  onCreateBoard,
  onDeleteBoard,
  onRenameBoard,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');

  const handleStartCreate = () => {
    setIsCreating(true);
    setNewTitle(`Spread ${String(boards.length + 1).padStart(2, '0')}`);
  };

  const handleConfirmCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      onCreateBoard(newTitle.trim());
      setNewTitle('');
      setIsCreating(false);
    }
  };

  const handleStartRename = (b: Board, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(b.id);
    setEditingTitle(b.title);
  };

  const handleConfirmRename = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId && editingTitle.trim()) {
      onRenameBoard(editingId, editingTitle.trim());
      setEditingId(null);
    }
  };

  return (
    <div className="w-full border-b-2 border-[#a6825f]/60 flex items-end justify-between gap-3 pt-2 pb-0 px-1 select-none relative z-20">
      {/* Index Tabs Strip */}
      <div className="flex items-end gap-1.5 overflow-x-auto scrollbar-none max-w-full">
        {boards.map((board, idx) => {
          const isActive = board.id === activeBoardId;
          const isEditing = editingId === board.id;

          if (isEditing) {
            return (
              <form
                key={board.id}
                onSubmit={handleConfirmRename}
                className="shrink-0 -mb-[2px] flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f2e4] border-t-2 border-l border-r border-[#8f643e] border-b-2 border-b-[#f7f2e4] rounded-t-lg shadow-sm z-30"
              >
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  autoFocus
                  className="font-serif text-xs font-bold text-[#2d1b0f] bg-transparent border-b border-[#734e32] focus:outline-none w-28"
                />
                <button
                  type="submit"
                  className="p-0.5 text-emerald-800 hover:text-emerald-950"
                  title="Save title"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="p-0.5 text-[#734e32] hover:text-[#2d1b0f]"
                  title="Cancel"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </form>
            );
          }

          return (
            <div
              key={board.id}
              onClick={() => onSelectBoard(board.id)}
              className={`shrink-0 group relative flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all cursor-pointer border-t-2 border-l border-r ${
                isActive
                  ? 'bg-[#f7f2e4] border-[#8f643e] border-b-2 border-b-[#f7f2e4] text-[#2c1a0e] shadow-[0_-2px_6px_rgba(20,10,5,0.08)] -mb-[2px] z-20 font-bold'
                  : 'bg-[#dfcfb9]/85 hover:bg-[#ebdcc8] border-[#b0967a] text-[#5c422c] hover:text-[#2c1a0e] -mb-[1px] z-10'
              }`}
            >
              {/* Tab eyelet mark */}
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-[#966b44]' : 'bg-[#9e856c]'
                }`}
              />

              <span className="font-serif text-xs tracking-tight whitespace-nowrap">
                {board.title}
              </span>

              <span className="font-mono text-[9px] opacity-60">
                № 0{idx + 1}
              </span>

              {/* Quick edit / delete actions on tab hover */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-1">
                <button
                  type="button"
                  onClick={(e) => handleStartRename(board, e)}
                  className="p-0.5 text-[#7a593d] hover:text-[#2d1b0f] transition-colors"
                  title="Rename spread"
                >
                  <Edit2 className="w-3 h-3" />
                </button>

                {boards.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Remove "${board.title}" spread?`)) {
                        onDeleteBoard(board.id);
                      }
                    }}
                    className="p-0.5 text-rose-700 hover:text-rose-900 transition-colors"
                    title="Remove spread"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Inline Create Form or + New Board Tab Button */}
        {isCreating ? (
          <form
            onSubmit={handleConfirmCreate}
            className="shrink-0 -mb-[2px] flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f2e4] border-t-2 border-l border-r border-[#8f643e] border-b-2 border-b-[#f7f2e4] rounded-t-lg shadow-sm z-30"
          >
            <input
              type="text"
              placeholder="Board title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              autoFocus
              className="font-serif text-xs font-bold text-[#2d1b0f] bg-transparent border-b border-[#734e32] focus:outline-none w-32"
            />
            <button
              type="submit"
              className="px-2 py-0.5 bg-[#734e32] text-white rounded-xs font-mono text-[10px] font-bold cursor-pointer"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="p-0.5 text-[#734e32] hover:text-[#2d1b0f] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={handleStartCreate}
            className="shrink-0 -mb-[1px] flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg bg-[#cbb092] hover:bg-[#bfa07e] border-t-2 border-l border-r border-[#8a6545] text-[#342013] text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-xs z-10"
            title="Create a new journal board"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>+ New Board</span>
          </button>
        )}
      </div>

      {/* Right side dedicated + Add Board button and count */}
      <div className="flex items-center gap-2 pb-1 shrink-0">
        <button
          type="button"
          onClick={handleStartCreate}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#7c5438] hover:bg-[#68432a] text-[#fbf8f2] font-mono text-xs font-bold shadow-xs transition-colors cursor-pointer"
          title="Create a new scrapbook board"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">+ Add Board</span>
          <span className="sm:hidden">+ Board</span>
        </button>
        <span className="hidden md:inline font-mono text-[11px] text-[#7d5f43] pl-1">
          {boards.length} {boards.length === 1 ? 'Board' : 'Boards'}
        </span>
      </div>
    </div>
  );
};
