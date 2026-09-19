import React from 'react';
import { 
  Plus, 
  Search, 
  Moon, 
  Sun, 
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCreateModal: () => void;
  onOpenStickerDrawer?: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onReplayIntro: () => void;
  totalNotes: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onOpenCreateModal,
  onOpenStickerDrawer,
  darkMode,
  onToggleDarkMode,
  onReplayIntro,
  totalNotes,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-4 backdrop-blur-md bg-[#f7f3ea]/80 dark:bg-[#171412]/80 border-b border-[#dfd2be] dark:border-[#382b22] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand Identity (Vintage Craft Studio) */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8c6243] flex items-center justify-center shadow-md shadow-[#8c6243]/25 text-[#fdf8f4] font-bold font-mono text-base border border-[#6b472e]">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-[#382619] dark:text-[#ede2d5]">
                  ScribeNotes
                </span>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#ebdccb] dark:bg-[#34271e] text-[#6d4d33] dark:text-[#d9c4b1] border border-[#d6c2ad] dark:border-[#4d3a2e]">
                  {totalNotes} {totalNotes === 1 ? 'Scrap' : 'Scraps'}
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#8a705b] dark:text-[#a38b77]">
                Craft Journal & Scrapbook
              </p>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-lg h-9 w-9"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#735137]" />}
            </Button>
            <Button
              variant="craft"
              size="sm"
              onClick={onOpenCreateModal}
              className="flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>New</span>
            </Button>
          </div>
        </div>

        {/* Center: Search Field (Kraft / Parchment Styled) */}
        <div className="flex items-center flex-1 max-w-md w-full">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a705b]" />
            <input
              type="text"
              placeholder="Search scrapbook, tags, sketches..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-[#ede3d1]/70 dark:bg-[#251d17]/80 border border-[#d6c4ae] dark:border-[#443327] text-sm text-[#382619] dark:text-[#ede2d5] focus:outline-none focus:ring-2 focus:ring-[#986745] transition-all placeholder:text-[#99816d]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a705b] hover:text-[#382619] dark:hover:text-[#ede2d5]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Replay Intro */}
          <button
            type="button"
            onClick={onReplayIntro}
            className="text-xs font-mono text-[#735843] hover:text-[#382619] dark:text-[#b09681] dark:hover:text-white px-3 py-2 rounded-lg hover:bg-[#eae0ce] dark:hover:bg-[#271e18] transition-colors cursor-pointer"
            title="Replay Calligraphy Intro"
          >
            <span>Intro</span>
          </button>

          {/* Dark / Light Toggle */}
          <Button
            variant="parchment"
            size="icon"
            onClick={onToggleDarkMode}
            className="rounded-xl"
            title="Toggle Album Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#735137]" />}
          </Button>



          {/* New Scrap Button */}
          <Button
            variant="craft"
            onClick={onOpenCreateModal}
            className="flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>New Scrap</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
