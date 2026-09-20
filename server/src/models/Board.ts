import { Schema, model } from 'mongoose';

const boardSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String, default: '' },
    },
    { timestamps: true }
);

export const BoardModel = model('Board', boardSchema);