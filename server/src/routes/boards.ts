import { Router } from 'express';
import { BoardModel } from '../models/Board';

export const boardRouter = Router();

boardRouter.get('/', async (_req, res) => {
    try {
        const boards = await BoardModel.find().sort({ createdAt: 1 });
        res.json(boards);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch boards' });
    }
});

boardRouter.post('/', async (req, res) => {
    try {
        const board = await BoardModel.create(req.body);
        res.status(201).json(board);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create board' });
    }
});

boardRouter.put('/:id', async (req, res) => {
    try {
        const board = await BoardModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(board);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update board' });
    }
});

boardRouter.delete('/:id', async (req, res) => {
    try {
        await BoardModel.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete board' });
    }
});