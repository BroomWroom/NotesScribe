import { Schema, model } from 'mongoose';

const stickerSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        boardId: { type: String, default: 'board-1', index: true },
        stickerType: { type: String, required: true },
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        rotation: { type: Number, default: 0 },
        scale: { type: Number, default: 1 },
    },
    { timestamps: true }
);

export const StickerModel = model('Sticker', stickerSchema);