import { Router } from 'express';
import { StickerModel } from '../models/Sticker';

export const stickerRouter = Router();

stickerRouter.get('/', async (req, res) => {
    try {
        const boardId = typeof req.query.boardId === 'string' ? req.query.boardId : undefined;
        const filter = boardId ? { boardId } : {};
        const stickers = await StickerModel.find(filter);
        res.json(stickers);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stickers' });
    }
});

stickerRouter.post('/', async (req, res) => {
    try {
        const sticker = await StickerModel.create(req.body);
        res.status(201).json(sticker);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create sticker' });
    }
});

stickerRouter.put('/:id', async (req, res) => {
    try {
        const sticker = await StickerModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(sticker);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update sticker' });
    }
});

stickerRouter.delete('/:id', async (req, res) => {
    try {
        await StickerModel.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete sticker' });
    }
});