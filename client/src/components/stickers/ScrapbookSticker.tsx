import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { PlacedSticker } from '@/types/note';
import { getStickerRenderer } from './StickerCatalog';
import { RotateCw, Trash2 } from 'lucide-react';

interface ScrapbookStickerProps {
  sticker: PlacedSticker;
  onUpdatePosition: (id: string, pos: { x: number; y: number }) => void;
  onUpdateRotation: (id: string, rotation: number) => void;
  onDelete: (id: string) => void;
}

export const ScrapbookSticker: React.FC<ScrapbookStickerProps> = ({
  sticker,
  onUpdatePosition,
  onUpdateRotation,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const StickerComponent = getStickerRenderer(sticker.stickerType);

  const x = useMotionValue(sticker.x);
  const y = useMotionValue(sticker.y);

  useEffect(() => {
    x.set(sticker.x);
    y.set(sticker.y);
  }, [sticker.x, sticker.y, x, y]);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100);

    const finalX = Math.max(10, Math.round(x.get()));
    const finalY = Math.max(10, Math.round(y.get()));
    onUpdatePosition(sticker.id, { x: finalX, y: finalY });
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextRotation = (sticker.rotation + 15) % 360;
    onUpdateRotation(sticker.id, nextRotation);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(sticker.id);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        x,
        y,
        zIndex: isHovered ? 45 : 15,
      }}
      animate={{
        rotate: sticker.rotation,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileDrag={{
        scale: 1.12,
        zIndex: 100,
        cursor: 'grabbing',
      }}
      className="group cursor-grab active:cursor-grabbing select-none"
    >
      {/* Sticker Action Hover Controls */}
      {isHovered && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#2e1f14]/90 backdrop-blur-xs px-2 py-0.5 rounded-md shadow-md z-30 pointer-events-auto">
          <button
            type="button"
            onClick={handleRotate}
            className="p-1 text-[#d8c5b0] hover:text-white transition-colors cursor-pointer"
            title="Rotate Sticker (+15°)"
          >
            <RotateCw className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="p-1 text-rose-300 hover:text-rose-100 transition-colors cursor-pointer"
            title="Remove Sticker"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Rendered Sticker SVG */}
      <StickerComponent />
    </motion.div>
  );
};
