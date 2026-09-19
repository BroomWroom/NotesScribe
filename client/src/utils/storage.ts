import { Note, Board, PlacedSticker } from '@/types/note';

const STORAGE_KEY_NOTES = 'notes_scribe_pinterest_v2_notes';
const STORAGE_KEY_BOARDS = 'notes_scribe_pinterest_v2_boards';
const STORAGE_KEY_STICKERS = 'notes_scribe_pinterest_v2_stickers';
const STORAGE_KEY_ACTIVE_BOARD = 'notes_scribe_pinterest_v2_active_board';

export const INITIAL_BOARDS: Board[] = [
  {
    id: 'board-1',
    title: 'Main Scrapbook Spread',
    description: 'Keepsakes, tickets, and pressed memorabilia',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    id: 'board-2',
    title: 'Botanical & Field Notes',
    description: 'Pressed plants, herbarium records, and field sketches',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

export const INITIAL_NOTES: Note[] = [
  {
    id: 'journal-1',
    boardId: 'board-1',
    title: 'Interstellar Night Train Slip',
    content: 'COUPON NO. 73-31-44-01\nValid for all district journeys. Keep this ticket safe between the book leaves.',
    category: 'Ticket',
    tags: ['ticket', 'vintage', 'collect'],
    color: 'parchment',
    isPinned: true,
    isArchived: false,
    position: { x: 40, y: 30 },
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 'journal-2',
    boardId: 'board-1',
    title: 'Life without love is like a tree without blossoms.',
    content: '"You are always there for me when things tend to go wrong. It\'s that faith that keeps my spirit alive."',
    category: 'Quotes',
    tags: ['quote', 'typewriter', 'poetry'],
    color: 'kraft',
    isPinned: true,
    isArchived: false,
    position: { x: 380, y: 30 },
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    id: 'journal-3',
    boardId: 'board-1',
    title: 'Pressed Woodland Fern',
    content: 'Specimen: Polypodiopsida frond.\nCollected at the edge of the mist pine forest. Dried under cedar boards for 21 days.',
    category: 'Botanical',
    tags: ['fern', 'pressed', 'herbarium'],
    color: 'sage',
    isPinned: false,
    isArchived: false,
    position: { x: 60, y: 50 },
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: 'journal-4',
    boardId: 'board-1',
    title: 'Treasure every moment you have.',
    content: 'COLLECT. No. 04\nPostage registered stamp. Morning tea, classical violin sonatas, and warm candlelight.',
    category: 'Collect',
    tags: ['stamp', 'moments', 'gratitude'],
    color: 'terracotta',
    isPinned: false,
    isArchived: false,
    position: { x: 420, y: 70 },
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: 'journal-5',
    boardId: 'board-1',
    title: 'Hennessy Road Night Tram',
    content: 'Ticket passenger slip.\nWatching the neon signs shimmer across rain-slicked tram rails at midnight.',
    category: 'Memories',
    tags: ['travel', 'night', 'film'],
    color: 'blueprint',
    isPinned: false,
    isArchived: false,
    position: { x: 740, y: 60 },
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'journal-6',
    boardId: 'board-2',
    title: 'Wild Mountain Thyme Extract',
    content: 'Gathered on eastern stony slopes. High aroma, deep evergreen leaves. Dried with sea salt in linen bags.',
    category: 'Botanical',
    tags: ['thyme', 'alpine', 'herbarium'],
    color: 'sage',
    isPinned: true,
    isArchived: false,
    position: { x: 50, y: 30 },
    createdAt: new Date(Date.now() - 3600000 * 10).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 10).toISOString(),
  },
  {
    id: 'journal-7',
    boardId: 'board-2',
    title: 'Autumn Ginkgo Biloba Frond',
    content: 'Golden fan-shaped leaves collected near the ancient stone temple. Pressed flat for 14 days.',
    category: 'Collect',
    tags: ['ginkgo', 'autumn', 'leaves'],
    color: 'parchment',
    isPinned: false,
    isArchived: false,
    position: { x: 220, y: 60 },
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
];

export const INITIAL_STICKERS: PlacedSticker[] = [
  {
    id: 'sticker-1',
    boardId: 'board-1',
    stickerType: 'ticket-chocolat',
    x: 480,
    y: 360,
    rotation: -3,
    scale: 1,
  },
  {
    id: 'sticker-2',
    boardId: 'board-1',
    stickerType: 'label-collect',
    x: 200,
    y: 380,
    rotation: 2,
    scale: 1,
  },
  {
    id: 'sticker-3',
    boardId: 'board-1',
    stickerType: 'button-wood',
    x: 820,
    y: 390,
    rotation: 12,
    scale: 1,
  },
  {
    id: 'sticker-4',
    boardId: 'board-1',
    stickerType: 'stamp-botanical',
    x: 650,
    y: 370,
    rotation: -4,
    scale: 1,
  },
];

export const getStoredBoards = (): Board[] => {
  if (typeof window === 'undefined') return INITIAL_BOARDS;
  try {
    const data = localStorage.getItem(STORAGE_KEY_BOARDS);
    if (!data) {
      localStorage.setItem(STORAGE_KEY_BOARDS, JSON.stringify(INITIAL_BOARDS));
      return INITIAL_BOARDS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_BOARDS;
  } catch (error) {
    console.error('Failed to load boards from localStorage', error);
    return INITIAL_BOARDS;
  }
};

export const saveStoredBoards = (boards: Board[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_BOARDS, JSON.stringify(boards));
  } catch (error) {
    console.error('Failed to save boards to localStorage', error);
  }
};

export const getActiveBoardId = (): string => {
  if (typeof window === 'undefined') return 'board-1';
  try {
    const active = localStorage.getItem(STORAGE_KEY_ACTIVE_BOARD);
    return active || 'board-1';
  } catch {
    return 'board-1';
  }
};

export const saveActiveBoardId = (boardId: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_BOARD, boardId);
  } catch (error) {
    console.error('Failed to save active board ID', error);
  }
};

export const getStoredNotes = (): Note[] => {
  if (typeof window === 'undefined') return INITIAL_NOTES;
  try {
    const data = localStorage.getItem(STORAGE_KEY_NOTES);
    if (!data) {
      // Check legacy key
      const legacy = localStorage.getItem('notes_scribe_pinterest_v1');
      if (legacy) {
        try {
          const parsedLegacy: Note[] = JSON.parse(legacy);
          const migrated = parsedLegacy.map((n, idx) => ({
            ...n,
            boardId: n.boardId || 'board-1',
            position: n.position || {
              x: 40 + (idx % 3) * 340,
              y: 40 + Math.floor(idx / 3) * 310,
            },
          }));
          localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(migrated));
          return migrated;
        } catch {}
      }
      localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(INITIAL_NOTES));
      return INITIAL_NOTES;
    }
    const parsed: Note[] = JSON.parse(data);
    // Ensure all notes have a boardId
    return parsed.map((n, idx) => ({
      ...n,
      boardId: n.boardId || 'board-1',
      position: n.position || {
        x: 40 + (idx % 3) * 340,
        y: 40 + Math.floor(idx / 3) * 310,
      },
    }));
  } catch (error) {
    console.error('Failed to load notes from localStorage', error);
    return INITIAL_NOTES;
  }
};

export const saveStoredNotes = (notes: Note[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
  } catch (error) {
    console.error('Failed to save notes to localStorage', error);
  }
};

export const getStoredStickers = (): PlacedSticker[] => {
  if (typeof window === 'undefined') return INITIAL_STICKERS;
  try {
    const data = localStorage.getItem(STORAGE_KEY_STICKERS);
    if (!data) {
      localStorage.setItem(STORAGE_KEY_STICKERS, JSON.stringify(INITIAL_STICKERS));
      return INITIAL_STICKERS;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to load stickers from localStorage', error);
    return INITIAL_STICKERS;
  }
};

export const saveStoredStickers = (stickers: PlacedSticker[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_STICKERS, JSON.stringify(stickers));
  } catch (error) {
    console.error('Failed to save stickers to localStorage', error);
  }
};
