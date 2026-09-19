import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Note, COLOR_CONFIG } from '@/types/note';
import { Pin, Trash2, Edit3, Copy, Check } from 'lucide-react';

interface PinboardNoteProps {
  note: Note;
  index: number;
  isPinnedSection?: boolean;
  onPositionChange?: (id: string, pos: { x: number; y: number }) => void;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string) => void;
}

function getScrapbookScatter(id: string, index: number) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);

  const rotations = [-5, 4, -3, 5.5, -4.5, 3.2, -6, 4.8, -3.8, 5];
  const rotation = rotations[abs % rotations.length];
  const tapeAngles = [-3, 2.5, -4, 3.5, -2, 3];
  const tapeAngle = tapeAngles[abs % tapeAngles.length];

  return { rotation, tapeAngle };
}

export const PinboardNote: React.FC<PinboardNoteProps> = ({
  note,
  index,
  isPinnedSection = false,
  onPositionChange,
  onEdit,
  onDelete,
  onTogglePin,
}) => {
  const [copied, setCopied] = useState(false);
  const isDraggingRef = useRef(false);
  const colorTheme = COLOR_CONFIG[note.color] || COLOR_CONFIG.parchment;

  const scatter = getScrapbookScatter(note.id, index);

  const defaultX = 30 + (index % 3) * 350;
  const defaultY = 30 + Math.floor(index / 3) * 320;
  const targetX = note.position?.x ?? defaultX;
  const targetY = note.position?.y ?? defaultY;

  const x = useMotionValue(targetX);
  const y = useMotionValue(targetY);

  useEffect(() => {
    x.set(targetX);
    y.set(targetY);
  }, [targetX, targetY, x, y]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${note.title}\n\n${note.content}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 120);

    if (onPositionChange && !isPinnedSection) {
      const finalX = Math.max(10, Math.round(x.get()));
      const finalY = Math.max(10, Math.round(y.get()));
      onPositionChange(note.id, { x: finalX, y: finalY });
    }
  };

  const handleClick = () => {
    if (!isDraggingRef.current) {
      onEdit(note);
    }
  };

  const formattedDate = new Date(note.updatedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.div
      layout={isPinnedSection}
      drag={!isPinnedSection}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={
        !isPinnedSection
          ? {
              position: 'absolute',
              x,
              y,
              width: '320px',
              maxWidth: 'calc(100% - 30px)',
            }
          : undefined
      }
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: isPinnedSection ? 0 : scatter.rotation,
      }}
      whileHover={{
        scale: 1.03,
        rotate: isPinnedSection ? 0 : scatter.rotation * 0.4,
        zIndex: 40,
        boxShadow: '0 25px 45px -8px rgba(35, 20, 10, 0.28)',
        transition: { type: 'spring', stiffness: 350, damping: 25 },
      }}
      whileDrag={{
        scale: 1.06,
        rotate: 0,
        zIndex: 100,
        boxShadow: '0 30px 60px -12px rgba(35, 20, 10, 0.4)',
        cursor: 'grabbing',
      }}
      onClick={handleClick}
      className={`group select-none ${
        isPinnedSection ? 'relative cursor-pointer' : 'cursor-grab active:cursor-grabbing'
      }`}
    >
      {/* Top Attachment: Brass Wire Clip for Pinned Scraps, or Delicate Lace Washi Tape */}
      {isPinnedSection ? (
        /* Vintage Brass Wire Binder Clip */
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
          <div className="w-7 h-5 rounded-xs border-2 border-[#b89558] bg-[#422f1d]/90 shadow-md flex items-center justify-center">
            <div className="w-3 h-2 border border-[#d6b77e] rounded-xs" />
          </div>
          <div className="w-1 h-2 bg-[#b89558] shadow-xs" />
        </div>
      ) : (
        /* Semi-translucent Lace / Masking Tape */
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-28 h-6 washi-tape-lace rounded-xs flex items-center justify-center"
          style={{
            transform: `translateX(-50%) rotate(${scatter.tapeAngle}deg)`,
            backgroundColor: colorTheme.tapeColor,
          }}
        >
          <div className="w-full border-t border-dotted opacity-30 border-[#856549]" />
        </div>
      )}

      {/* Scrapbook Paper Card: Distinct Style by Category */}
      <div
        className={`w-full min-h-[230px] rounded-lg p-6 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${colorTheme.cardBg}`}
        style={{
          borderColor: colorTheme.borderColor,
          boxShadow: '0 8px 24px -4px rgba(35, 20, 10, 0.14), 0 2px 6px -1px rgba(35, 20, 10, 0.08)',
        }}
      >
        {/* Subtle Decorative Vintage Corner / Stamp details */}
        {note.category === 'Collect' && (
          <div className="absolute inset-2 pointer-events-none stamp-edge opacity-60" />
        )}
        {note.category === 'Ticket' && (
          <div className="absolute top-0 bottom-0 left-0 w-1.5 border-r border-dashed border-[#856549]/30" />
        )}

        <div>
          {/* Header Row: Category Badge + Serial/Date + Quick Actions */}
          <div className="flex items-center justify-between gap-2 mb-3 pt-1 border-b border-current/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-current/40 rounded-xs bg-black/5">
                {note.category}
              </span>
              <span className="font-mono text-[10px] opacity-50 tracking-wider">
                № {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>

            {/* Quick Action Icons */}
            <div className="flex items-center gap-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              {/* Copy */}
              <button
                type="button"
                onClick={handleCopy}
                className="p-1 rounded-xs hover:bg-black/5 text-[#735843] hover:text-[#2c1d12] transition-colors"
                title="Copy note"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              {/* Pin */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin(note.id);
                }}
                className={`p-1 rounded-xs hover:bg-black/5 transition-colors ${
                  note.isPinned ? 'text-amber-700' : 'text-[#735843] hover:text-amber-700'
                }`}
                title={note.isPinned ? 'Unclip note' : 'Clip with brass binder'}
              >
                <Pin className={`w-3.5 h-3.5 ${note.isPinned ? 'fill-amber-700' : ''}`} />
              </button>

              {/* Delete */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(note.id);
                }}
                className="p-1 rounded-xs hover:bg-rose-100 text-[#735843] hover:text-rose-700 transition-colors"
                title="Remove scrap"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Title: Elegant Editorial Serif or Vintage Typewriter */}
          <h3 className="font-serif text-xl font-bold tracking-tight leading-snug mb-2 line-clamp-2 text-[#2c1d14]">
            {note.title}
          </h3>

          {/* Body: Courier Typewriter or Editorial Serif */}
          <p className="font-mono text-xs leading-relaxed line-clamp-5 whitespace-pre-wrap opacity-80 mb-4 text-[#3e2c1e]">
            {note.content}
          </p>
        </div>

        {/* Footer: Tags & Date */}
        <div>
          {note.tags && note.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2.5">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-xs bg-black/5 font-mono text-[9px] tracking-wider opacity-75"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-current/10 text-[10px] font-mono opacity-60">
            <span>{formattedDate}</span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-serif font-bold text-xs text-[#8c5a36] hover:underline">
              <Edit3 className="w-3 h-3" />
              <span>Inspect</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
