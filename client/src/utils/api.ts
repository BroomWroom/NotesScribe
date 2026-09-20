import { Note, Board, PlacedSticker } from '@/types/note';

const API_BASE = '/api';

// Boards API
export const apiGetBoards = async (): Promise<Board[]> => {
    const res = await fetch(`${API_BASE}/boards`);
    if (!res.ok) throw new Error('Failed to fetch boards');
    return res.json();
};

export const apiCreateBoard = async (board: Board): Promise<Board> => {
    const res = await fetch(`${API_BASE}/boards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(board),
    });
    return res.json();
};

export const apiUpdateBoard = async (id: string, updates: Partial<Board>): Promise<Board> => {
    const res = await fetch(`${API_BASE}/boards/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });
    return res.json();
};

export const apiDeleteBoard = async (id: string): Promise<void> => {
    await fetch(`${API_BASE}/boards/${id}`, { method: 'DELETE' });
};

// Notes API
export const apiGetNotes = async (): Promise<Note[]> => {
    const res = await fetch(`${API_BASE}/notes`);
    if (!res.ok) throw new Error('Failed to fetch notes');
    return res.json();
};

export const apiCreateNote = async (note: Note): Promise<Note> => {
    const res = await fetch(`${API_BASE}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
    return res.json();
};

export const apiUpdateNote = async (id: string, updates: Partial<Note>): Promise<Note> => {
    const res = await fetch(`${API_BASE}/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });
    return res.json();
};

export const apiDeleteNote = async (id: string): Promise<void> => {
    await fetch(`${API_BASE}/notes/${id}`, { method: 'DELETE' });
};

// Stickers API
export const apiGetStickers = async (): Promise<PlacedSticker[]> => {
    const res = await fetch(`${API_BASE}/stickers`);
    if (!res.ok) throw new Error('Failed to fetch stickers');
    return res.json();
};

export const apiCreateSticker = async (sticker: PlacedSticker): Promise<PlacedSticker> => {
    const res = await fetch(`${API_BASE}/stickers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sticker),
    });
    return res.json();
};

export const apiUpdateSticker = async (id: string, updates: Partial<PlacedSticker>): Promise<PlacedSticker> => {
    const res = await fetch(`${API_BASE}/stickers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });
    return res.json();
};

export const apiDeleteSticker = async (id: string): Promise<void> => {
    await fetch(`${API_BASE}/stickers/${id}`, { method: 'DELETE' });
};