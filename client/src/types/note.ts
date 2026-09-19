export type NoteColor = 'kraft' | 'parchment' | 'sage' | 'terracotta' | 'blueprint' | 'espresso';

export interface Board {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PlacedSticker {
  id: string;
  boardId: string;
  stickerType: string;
  x: number;
  y: number;
  rotation: number;
  scale?: number;
}

export interface Note {
  id: string;
  boardId?: string;
  title: string;
  content: string;
  category: 'Quotes' | 'Botanical' | 'Ticket' | 'Journal' | 'Memories' | 'Collect';
  tags: string[];
  color: NoteColor;
  isPinned: boolean;
  isArchived: boolean;
  position?: { x: number; y: number };
  createdAt: string;
  updatedAt: string;
}

export const COLOR_CONFIG: Record<NoteColor, {
  label: string;
  cardBg: string;
  borderColor: string;
  dotColor: string;
  tapeColor: string;
}> = {
  kraft: {
    label: 'Vintage Kraft',
    cardBg: 'bg-[#f4ebe1] text-[#3d2b1d]',
    borderColor: '#cbb6a1',
    dotColor: '#9c6f48',
    tapeColor: 'rgba(235, 218, 198, 0.85)',
  },
  parchment: {
    label: 'Warm Linen',
    cardBg: 'bg-[#fdfbf6] text-[#2c2016]',
    borderColor: '#dfd4be',
    dotColor: '#bfa36c',
    tapeColor: 'rgba(248, 244, 233, 0.9)',
  },
  sage: {
    label: 'Pressed Botanical',
    cardBg: 'bg-[#edf3ee] text-[#1c2e20]',
    borderColor: '#bfd4c2',
    dotColor: '#5c8762',
    tapeColor: 'rgba(215, 232, 218, 0.85)',
  },
  terracotta: {
    label: 'Burnt Sienna',
    cardBg: 'bg-[#f7ebe6] text-[#3d2118]',
    borderColor: '#dfb7ab',
    dotColor: '#b3614a',
    tapeColor: 'rgba(240, 216, 208, 0.85)',
  },
  blueprint: {
    label: 'Cyanotype',
    cardBg: 'bg-[#ebf4f7] text-[#172c36]',
    borderColor: '#b4d1dc',
    dotColor: '#457387',
    tapeColor: 'rgba(206, 227, 235, 0.85)',
  },
  espresso: {
    label: 'Aged Sepia',
    cardBg: 'bg-[#eee6de] text-[#281c15]',
    borderColor: '#c6b4a5',
    dotColor: '#6e503e',
    tapeColor: 'rgba(215, 200, 188, 0.85)',
  }
};
