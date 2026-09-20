import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        boardId: { type: String, default: 'board-1', index: true },
        title: { type: String, required: true },
        content: { type: String, default: '' },
        category: { type: String, default: 'General' },
        tags: [{ type: String }],
        color: { type: String, default: 'parchment' },
        isPinned: { type: Boolean, default: false },
        isArchived: { type: Boolean, default: false },
        position: {
            x: { type: Number, default: 40 },
            y: { type: Number, default: 40 },
        },
    },
    { timestamps: true }
);

export const NoteModel = model('Note', noteSchema);