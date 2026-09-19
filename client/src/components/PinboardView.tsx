import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PinboardNote } from './PinboardNote';
import { ScrapbookSticker } from './stickers/ScrapbookSticker';
import { BoardTabs } from './BoardTabs';
import { Note, Board, PlacedSticker } from '@/types/note';
import { Pin, Plus, Stamp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  PaperDoily,
  PressedFernSprig,
  VintageWoodenButton,
  VintageWireBinderClip,
  LeftDeskEphemera,
  RightDeskTickets,
} from './JournalDecorations';

interface PinboardViewProps {
  boards: Board[];
  activeBoardId: string;
  onSelectBoard: (id: string) => void;
  onCreateBoard: (title: string) => void;
  onDeleteBoard: (id: string) => void;
  onRenameBoard: (id: string, title: string) => void;
  notes: Note[];
  stickers: PlacedSticker[];
  onPositionChange: (id: string, pos: { x: number; y: number }) => void;
  onUpdateStickerPosition: (id: string, pos: { x: number; y: number }) => void;
  onUpdateStickerRotation: (id: string, rotation: number) => void;
  onDeleteSticker: (id: string) => void;
  onOpenStickerDrawer: () => void;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string) => void;
  onCreateNew: () => void;
}

export const PinboardView: React.FC<PinboardViewProps> = ({
  boards,
  activeBoardId,
  onSelectBoard,
  onCreateBoard,
  onDeleteBoard,
  onRenameBoard,
  notes,
  stickers,
  onPositionChange,
  onUpdateStickerPosition,
  onUpdateStickerRotation,
  onDeleteSticker,
  onOpenStickerDrawer,
  onEdit,
  onDelete,
  onTogglePin,
  onCreateNew,
}) => {
  const pinnedNotes = notes.filter((n) => n.isPinned);
  const unpinnedNotes = notes.filter((n) => !n.isPinned);

  // Dynamically calculate canvas height so placed notes/stickers never clip
  const noteBottoms = unpinnedNotes.map((n) => (n.position?.y ?? 0) + 360);
  const stickerBottoms = stickers.map((s) => s.y + 120);
  const canvasMinHeight = Math.max(680, ...noteBottoms, ...stickerBottoms);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-5">
      {/* Board Management Tabs Styled Like Sketchbook Index Tabs */}
      <BoardTabs
        boards={boards}
        activeBoardId={activeBoardId}
        onSelectBoard={onSelectBoard}
        onCreateBoard={onCreateBoard}
        onDeleteBoard={onDeleteBoard}
        onRenameBoard={onRenameBoard}
      />

      {/* Pinned Section: Neatly Clipped at the Top */}
      {pinnedNotes.length > 0 && (
        <div className="w-full p-6 sm:p-8 rounded-xl bg-[#f5ecdc]/95 border border-[#d8c7ad] shadow-md relative overflow-visible -mt-2">
          {/* Top Brass Clip Decor */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#cfbfa2]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#68492f] uppercase tracking-widest">
              <Pin className="w-4 h-4 fill-[#94693f] text-[#94693f]" />
              <span>Pinned Keepsakes ({pinnedNotes.length})</span>
            </div>
            <span className="font-mono text-[11px] text-[#86684c] tracking-wider">
              Clipped to front
            </span>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {pinnedNotes.map((note, idx) => (
                <PinboardNote
                  key={note.id}
                  note={note}
                  index={idx}
                  isPinnedSection={true}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onTogglePin={onTogglePin}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* The Open Art Journal Spread on the Wooden Table */}
      <div className="relative w-full">
        {/* Left Desk Ephemera Stack (Sheet music + Hennessy Road ticket booklet + Paris Metro stub) */}
        <LeftDeskEphemera className="absolute -left-52 top-8" />

        {/* Right Desk Vintage Tickets Stack (Luggage tag + star cinema stub + confectioner tickets) */}
        <RightDeskTickets className="absolute -right-48 top-16" />

        {/* Paper Lace Doilies Peeking Out from Underneath the Journal */}
        <PaperDoily className="absolute -top-14 -right-12 z-0 hidden md:block" />
        <PaperDoily className="absolute -bottom-16 -right-14 z-0 hidden sm:block" />

        {/* The Open Art Journal Spread */}
        <div className="w-full relative z-10 rounded-2xl journal-spread shadow-journal border border-[#d3c5a6] overflow-visible p-6 sm:p-12">
          {/* Center Book Spine Valley Shadow */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 pointer-events-none bg-gradient-to-r from-transparent via-black/[0.09] to-transparent hidden md:block z-20" />

          {/* Authentic Journal Header: Vintage Lace Washi Tape Strip */}
          <div className="absolute -top-3 left-12 right-20 h-6 washi-tape-lace rounded-xs pointer-events-none opacity-90 hidden sm:block" />

          {/* Vintage Black & Gold Wire Binder Clip Fastened on Top Right Page Corner */}
          <div className="absolute -top-5 right-8 z-30 pointer-events-none hidden sm:block">
            <VintageWireBinderClip />
          </div>

          {/* Page Ephemera Background Accents */}
          <PressedFernSprig className="absolute top-24 right-6 z-0 hidden lg:block transform rotate-12" />
          <VintageWoodenButton className="absolute bottom-12 right-12 z-0 hidden md:block" />

          {/* Vintage Typewriter Quotes Imprinted on Paper */}
          <div className="absolute top-14 left-10 pointer-events-none select-none opacity-35 font-mono text-[10px] text-[#422c19] tracking-widest uppercase hidden xl:block">
            COLLECT. I will remember this happy day.
          </div>
          <div className="absolute bottom-6 right-24 pointer-events-none select-none opacity-35 font-mono text-[11px] text-[#422c19] tracking-wide hidden xl:block">
            Because loved a crazy, no see you still smiling. Good silence.
          </div>

          {/* Subtitle bar: Freely drag text moved to the RIGHT (no count) so top-left quote is completely uncovered */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-[#ded2b8] px-2 relative z-10">
            {/* Left side clear so imprinted quote is totally uncovered */}
            <div className="w-2" />

            {/* Right side: Freely drag text + Action Buttons */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#7d5f43] tracking-wider font-semibold hidden sm:inline">
                Freely drag & arrange scraps
              </span>
              <Button
                variant="parchment"
                size="sm"
                onClick={onOpenStickerDrawer}
                className="flex items-center gap-1.5 text-xs font-mono border border-[#c4ae94] shadow-xs"
              >
                <Stamp className="w-3.5 h-3.5 text-[#7a5035]" />
                <span>+ Add Sticker</span>
              </Button>

              <Button
                variant="craft"
                size="sm"
                onClick={onCreateNew}
                className="flex items-center gap-1.5 text-xs font-mono shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ New Scrap</span>
              </Button>
            </div>
          </div>

          {/* Scrapbook Free-form Canvas */}
          <div
            className="relative w-full z-10"
            style={{ minHeight: `${canvasMinHeight}px` }}
          >
            {unpinnedNotes.length === 0 && stickers.length === 0 ? (
              <div className="py-20 text-center select-none">
                <p className="font-serif text-xl italic text-[#634932] mb-3">
                  This page of your journal is blank.
                </p>
                <p className="font-mono text-xs text-[#80644e] mb-6">
                  Paste tickets, pressed botanicals, or write a new scrap note.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button variant="craft" onClick={onCreateNew} className="text-xs font-mono">
                    <Plus className="w-4 h-4 mr-1.5" />
                    <span>Paste New Scrap</span>
                  </Button>
                  <Button variant="parchment" onClick={onOpenStickerDrawer} className="text-xs font-mono border border-[#c4ae94]">
                    <Stamp className="w-4 h-4 mr-1.5 text-[#7a5035]" />
                    <span>Add Sticker</span>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Notes placed on canvas */}
                <AnimatePresence mode="popLayout">
                  {unpinnedNotes.map((note, idx) => (
                    <PinboardNote
                      key={note.id}
                      note={note}
                      index={idx}
                      isPinnedSection={false}
                      onPositionChange={onPositionChange}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onTogglePin={onTogglePin}
                    />
                  ))}
                </AnimatePresence>

                {/* Stickers placed on canvas */}
                {stickers.map((sticker) => (
                  <ScrapbookSticker
                    key={sticker.id}
                    sticker={sticker}
                    onUpdatePosition={onUpdateStickerPosition}
                    onUpdateRotation={onUpdateStickerRotation}
                    onDelete={onDeleteSticker}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
