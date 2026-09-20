import { Router } from 'express';
import { NoteModel } from '../models/Note';

export const noteRouter = Router();

noteRouter.get('/', async (req, res) => {
    try {
        const boardId = typeof req.query.boardId === 'string' ? req.query.boardId : undefined;
        const filter = boardId ? { boardId } : {};
        const notes = await NoteModel.find(filter).sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

noteRouter.post('/', async (req, res) => {
    try {
        const note = await NoteModel.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create note' });
    }
});

noteRouter.put('/:id', async (req, res) => {
    try {
        const note = await NoteModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update note' });
    }
});

noteRouter.delete('/:id', async (req, res) => {
    try {
        await NoteModel.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
});