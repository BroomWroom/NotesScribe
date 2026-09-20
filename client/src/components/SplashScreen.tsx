import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

interface QuoteItem {
  text: string;
  author: string;
}

const QUOTES: QuoteItem[] = [
  {
    text: "The palest ink is better than the best memory.",
    author: "Chinese Proverb",
  },
  {
    text: "Fill your paper with the breathings of your heart.",
    author: "William Wordsworth",
  },
  {
    text: "We write to taste life twice, in the moment & in retrospect.",
    author: "Anaïs Nin",
  },
  {
    text: "A quiet corner for your wandering thoughts.",
    author: "ScribeNotes",
  },
  {
    text: "Collect moments, not just things.",
    author: "Anonymous",
  },
  {
    text: "Scatter thoughts like seeds, and watch them grow.",
    author: "Henry David Thoreau",
  },
  {
    text: "Write down the thoughts of this fleeting moment.",
    author: "Francis Bacon",
  },
  {
    text: "Every blank page is an open doorway.",
    author: "ScribeNotes",
  },
  {
    text: "Memory is a diary we carry with us.",
    author: "Oscar Wilde",
  },
  {
    text: "Ideas are wandering birds; catch them on paper.",
    author: "Anonymous",
  },
];

// Continuous single-stroke centerline cursive path where you actually watch the ink glide
export const DEFAULT_HELLO_PATH =
  "M 45 42 C 35 26, 45 16, 56 18 C 66 20, 58 45, 52 75 C 46 105, 42 125, 38 135 " +
  "M 95 18 C 92 45, 88 85, 85 125 C 84 135, 88 138, 95 132 " +
  "M 48 78 C 65 72, 85 70, 102 74 C 112 78, 120 120, 130 115 " +
  "C 138 110, 145 92, 140 84 C 134 76, 122 84, 126 102 C 130 118, 145 122, 155 110 " +
  "C 165 98, 185 30, 175 20 C 165 10, 152 35, 160 80 C 166 115, 172 125, 185 118 " +
  "C 195 105, 215 30, 205 20 C 195 10, 182 35, 190 80 C 196 115, 202 125, 215 118 " +
  "C 225 108, 235 90, 250 88 C 265 86, 272 98, 268 112 C 262 128, 240 128, 236 112 C 232 98, 248 88, 262 88 C 275 88, 290 95, 305 92";

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const quote = useMemo(() => {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }, []);

  useEffect(() => {
    // 4.5s for handwriting ink to slowly glide across + 2.5s to read the quote
    const timer = setTimeout(() => {
      onComplete();
    }, 7000);

    const handleKeyDown = () => {
      onComplete();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f7f3ea] dark:bg-[#171412] select-none cursor-pointer px-6 overflow-hidden"
      onClick={onComplete}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="w-full max-w-lg flex flex-col items-center justify-center">
        {/* Authentic single-stroke cursive handwriting animation where the ink visibly glides */}
        <svg
          viewBox="0 0 340 160"
          className="w-[280px] sm:w-[320px] text-[#5d3c2a] dark:text-[#ede2d5]"
          aria-hidden={true}
        >
          <title>Handwritten Hello</title>
          <motion.path
            d={DEFAULT_HELLO_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#5d3c2a] dark:stroke-[#ede2d5]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 0.25,
              duration: 4.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </svg>

        {/* Random thought / quote appearing gently below as the ink finishes writing */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 text-center px-4"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#523725] dark:text-[#e4d7c8] leading-relaxed">
            “{quote.text}”
          </p>
          {quote.author && (
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#8a684b] dark:text-[#be9f84] mt-2 opacity-80">
              — {quote.author}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
