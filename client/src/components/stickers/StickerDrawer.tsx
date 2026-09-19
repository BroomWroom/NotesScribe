import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Tag, Stamp } from 'lucide-react';
import { STICKER_CATALOG, StickerMeta } from './StickerCatalog';

interface StickerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSticker: (stickerType: string) => void;
}

const CATEGORIES: Array<{ id: string; label: string }> = [
  { id: 'all', label: 'All Ephemera' },
  { id: 'quotes', label: 'Artsy Quotes' },
  { id: 'tickets', label: 'Vintage Tickets' },
  { id: 'postage', label: 'Postage & Seals' },
  { id: 'botanical', label: 'Pressed Flora' },
  { id: 'craft', label: 'Craft & Washi' },
];

export const StickerDrawer: React.FC<StickerDrawerProps> = ({
  isOpen,
  onClose,
  onAddSticker,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  if (!isOpen) return null;

  const filtered = STICKER_CATALOG.filter((s) =>
    activeCategory === 'all' ? true : s.category === activeCategory
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#19100a]/70 backdrop-blur-xs"
        />

        {/* Vintage Drawer Box Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#f7f2e4] text-[#342215] border-2 border-[#bfa588] rounded-2xl p-6 sm:p-8 z-10 shadow-2xl overflow-visible"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#ded0bb]">
            <div>
              <div className="font-serif text-2xl font-bold italic tracking-tight text-[#2c1a0e]">
                Ephemera & Sticker Drawer
              </div>
              <p className="font-mono text-xs text-[#7d5f43] mt-0.5">
                Click any vintage scrap to paste it into your active journal spread
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#ebdcc8] text-[#735843] hover:text-[#2c1a0e] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 scrollbar-none border-b border-[#ded0bb]/60">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-md whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#70492f] text-white shadow-xs'
                      : 'bg-[#ebdcc8]/80 text-[#634832] hover:bg-[#e4d2bc]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Stickers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[380px] overflow-y-auto py-4 px-1 scrollbar-thin">
            {filtered.map((sticker) => {
              const Comp = sticker.render;
              return (
                <button
                  key={sticker.id}
                  type="button"
                  onClick={() => {
                    onAddSticker(sticker.id);
                    onClose();
                  }}
                  className="group relative flex flex-col items-center justify-between p-3.5 rounded-xl border border-[#dbcbb2] bg-[#fbf9f3] hover:bg-[#ffffff] hover:border-[#8c6748] hover:shadow-md transition-all cursor-pointer min-h-[120px]"
                >
                  <div className="flex-1 flex items-center justify-center py-2 transform group-hover:scale-108 transition-transform">
                    <Comp />
                  </div>
                  <div className="w-full text-center mt-2 pt-1 border-t border-black/5">
                    <div className="font-mono text-[10px] font-bold text-[#452e1c] truncate">
                      {sticker.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="pt-3 border-t border-[#ded0bb] flex items-center justify-between text-[11px] font-mono text-[#8a6b4f]">
            <span>All scraps are freely draggable & rotatable once pasted</span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-[#6e462c] hover:underline"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
