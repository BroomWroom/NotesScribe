import React from 'react';

/**
 * ScrapbookBackground
 * 
 * Replaces the dull dark brown void with an authentic layered vintage scrapbook collage,
 * directly inspired by the user's reference photo (media_1789804994804.png).
 * 
 * Features:
 * - Warm kraft brown graph/grid paper base
 * - Organic torn paper sheets with white deckled/ripped fibrous edges & drop shadows
 * - Vintage book/newspaper typography peeking from behind torn layers
 * - Delicate watercolor botanical florals (peach & blush tea roses, berry clusters, sage leaves)
 * - Realistic brass dome pushpin & silver thumbtack holding paper layers
 * - Subtle crumpled paper creases and warm ambient vignette
 * - Full responsiveness & dark-mode compatibility
 */
export const ScrapbookBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-500"
    >
      {/* 1. Base Kraft Graph Paper with Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[#d9c3a7] dark:bg-[#1a1410]">
        {/* Repeating Craft Grid / Graph Paper Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35 dark:opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="scrapbook-grid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="#8a6745"
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />
              {/* Secondary delicate sub-grid dot */}
              <circle cx="14" cy="14" r="0.5" fill="#8a6745" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scrapbook-grid)" />
        </svg>

        {/* Paper Grain & Subtle Fibers */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#614124 0.65px, transparent 0.65px), radial-gradient(#8c5e39 0.5px, transparent 0.5px)`,
            backgroundSize: '16px 16px, 24px 24px',
            backgroundPosition: '0 0, 8px 8px',
          }}
        />
      </div>

      {/* 2. Top-Right Layer: Torn Vintage Book Page & Botanical Sprig */}
      <div className="absolute -top-6 -right-10 w-[420px] h-[340px] sm:w-[540px] sm:h-[400px] pointer-events-none">
        <svg
          viewBox="0 0 500 380"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Filter for realistic paper drop shadow */}
            <filter id="paper-shadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="5" stdDeviation="5" floodColor="#2b1a0d" floodOpacity="0.25" />
            </filter>
            <linearGradient id="kraft-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ede2cd" />
              <stop offset="100%" stopColor="#dfceb3" />
            </linearGradient>
            <linearGradient id="leaf-grad-1" x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#55754b" />
              <stop offset="100%" stopColor="#3b5633" />
            </linearGradient>
          </defs>

          {/* Under-layer: Vintage Antique Newsprint / Book Text */}
          <g transform="rotate(6, 380, 80) translate(160, -20)">
            <path
              d="M 60 0 L 260 0 L 260 220 L 120 220 Q 80 180 60 0 Z"
              fill="#f5edd8"
              stroke="#dfd2be"
              strokeWidth="1"
            />
            {/* Faded Book Text Lines */}
            <text x="80" y="35" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#5c432d" opacity="0.65">
              Anno Domini • Florilegium
            </text>
            <text x="80" y="52" fontFamily="serif" fontSize="7" fill="#6e533c" opacity="0.55">
              Lorem ipsum dolor sit amet, florens
            </text>
            <text x="80" y="66" fontFamily="serif" fontSize="7" fill="#6e533c" opacity="0.55">
              antiqua natura et folia memorias
            </text>
            <text x="80" y="80" fontFamily="serif" fontSize="7" fill="#6e533c" opacity="0.55">
              scribere diebus laetis in horto...
            </text>
            <text x="80" y="94" fontFamily="serif" fontSize="7" fill="#6e533c" opacity="0.5">
              colligere somnia pulchra aeterna.
            </text>
          </g>

          {/* Over-layer: Torn Kraft Paper Sheet with Deckled Jagged Edge */}
          {/* Deckle White Fiber Underlay */}
          <path
            d="M 500 0 L 190 0 
               Q 205 28, 220 50 
               Q 208 72, 230 95 
               Q 245 110, 240 135 
               Q 260 155, 275 180 
               Q 265 205, 290 230 
               Q 310 250, 325 285 
               Q 350 310, 380 340 
               L 500 380 Z"
            fill="#fffdf8"
            opacity="0.9"
          />
          {/* Main Kraft Layer */}
          <path
            d="M 500 0 L 196 0 
               Q 209 27, 224 49 
               Q 212 71, 234 94 
               Q 249 109, 244 134 
               Q 264 154, 279 179 
               Q 269 204, 294 229 
               Q 314 249, 329 284 
               Q 354 309, 384 339 
               L 500 380 Z"
            fill="url(#kraft-grad-1)"
            filter="url(#paper-shadow)"
          />

          {/* Botanical Eucalyptus / Rose Leaf Sprig peeking from tear */}
          <g transform="translate(190, 40) rotate(-15)">
            {/* Main stem */}
            <path
              d="M 120 180 Q 90 120, 50 40 Q 30 10, 10 0"
              fill="none"
              stroke="#445c38"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Leaf pairs */}
            <path d="M 50 40 C 35 30, 20 45, 30 60 C 40 70, 55 55, 50 40 Z" fill="url(#leaf-grad-1)" opacity="0.9" />
            <path d="M 52 42 C 65 30, 80 40, 75 55 C 70 65, 55 55, 52 42 Z" fill="#4d6942" opacity="0.85" />
            
            <path d="M 70 85 C 50 75, 40 95, 50 110 C 65 120, 75 100, 70 85 Z" fill="url(#leaf-grad-1)" opacity="0.92" />
            <path d="M 72 87 C 90 75, 105 85, 100 105 C 95 115, 80 100, 72 87 Z" fill="#48633e" opacity="0.88" />

            <path d="M 95 135 C 75 125, 68 145, 80 160 C 95 170, 105 150, 95 135 Z" fill="url(#leaf-grad-1)" opacity="0.95" />
            
            {/* Small Rose Bud / Blossom */}
            <g transform="translate(15, -8)">
              <ellipse cx="14" cy="14" rx="10" ry="12" fill="#f4a896" opacity="0.85" />
              <ellipse cx="12" cy="12" rx="7" ry="9" fill="#fbd0c6" opacity="0.95" />
              <path d="M 8 18 C 10 14, 18 14, 20 18" stroke="#d66858" strokeWidth="1" fill="none" />
              <path d="M 14 26 L 14 32" stroke="#445c38" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>

      {/* 3. Bottom-Left Layer: Lush Watercolor Florals, Hydrangeas, and Torn Kraft & Book Layers */}
      <div className="absolute -bottom-10 -left-10 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] pointer-events-none">
        <svg
          viewBox="0 0 520 520"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rose-petal-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffe6d8" />
              <stop offset="60%" stopColor="#f5b89a" />
              <stop offset="100%" stopColor="#e08462" />
            </linearGradient>
            <linearGradient id="rose-inner" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fce4d6" />
              <stop offset="100%" stopColor="#d97250" />
            </linearGradient>
            <linearGradient id="berry-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fce4ec" />
              <stop offset="60%" stopColor="#f48fb1" />
              <stop offset="100%" stopColor="#c2185b" />
            </linearGradient>
            <linearGradient id="torn-kraft-corner" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#d2bba0" />
              <stop offset="100%" stopColor="#be9f7f" />
            </linearGradient>
          </defs>

          {/* Torn Antique Manuscript Scrap at bottom left */}
          <g transform="rotate(-12, 120, 420)">
            <path
              d="M 0 350 L 160 300 Q 190 380, 200 480 L 0 520 Z"
              fill="#f7f0e1"
              stroke="#e2d4be"
              strokeWidth="1"
            />
            {/* Vintage Italic Book Script */}
            <text x="30" y="380" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#694d35" opacity="0.6">
              Ex antiquo codice scriptum:
            </text>
            <text x="30" y="396" fontFamily="serif" fontSize="7.5" fill="#755a42" opacity="0.55">
              memoriam dulcem servare semper
            </text>
            <text x="30" y="410" fontFamily="serif" fontSize="7.5" fill="#755a42" opacity="0.55">
              in corde nostro... laetitia vera.
            </text>
          </g>

          {/* Torn Paper Jagged Edge cutting diagonally across bottom left corner */}
          <path
            d="M 0 520 L 0 280 
               Q 30 295, 60 285 
               Q 90 270, 115 290 
               Q 140 310, 160 340 
               Q 185 370, 210 400 
               Q 235 435, 270 470 
               L 310 520 Z"
            fill="#fffefb"
            opacity="0.95"
          />
          <path
            d="M 0 520 L 0 286 
               Q 29 300, 58 290 
               Q 88 275, 112 295 
               Q 137 314, 157 344 
               Q 182 374, 207 404 
               Q 232 438, 266 473 
               L 305 520 Z"
            fill="url(#torn-kraft-corner)"
            filter="url(#paper-shadow)"
          />

          {/* Botanical Artwork Cluster (directly styled like the reference photo) */}
          <g transform="translate(15, 240)">
            {/* Green Leaf Sprigs extending outward */}
            <g transform="rotate(25, 110, 110)">
              <path d="M 70 80 Q 95 30, 130 0" stroke="#48663b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <ellipse cx="90" cy="50" rx="9" ry="16" transform="rotate(30, 90, 50)" fill="#587a48" opacity="0.88" />
              <ellipse cx="115" cy="25" rx="8" ry="14" transform="rotate(45, 115, 25)" fill="#688c58" opacity="0.85" />
              <ellipse cx="130" cy="0" rx="7" ry="12" transform="rotate(20, 130, 0)" fill="#789d68" opacity="0.9" />
            </g>

            {/* Clustered Pink Hydrangea / Snowball Blossom Buds */}
            <g transform="translate(45, 65)">
              <circle cx="12" cy="18" r="9" fill="url(#berry-grad)" opacity="0.9" />
              <circle cx="26" cy="14" r="8" fill="url(#berry-grad)" opacity="0.95" />
              <circle cx="20" cy="30" r="8.5" fill="url(#berry-grad)" opacity="0.92" />
              <circle cx="34" cy="26" r="9" fill="url(#berry-grad)" opacity="0.88" />
              <circle cx="28" cy="42" r="8" fill="url(#berry-grad)" opacity="0.9" />
              <circle cx="44" cy="38" r="8" fill="url(#berry-grad)" opacity="0.85" />
              <circle cx="38" cy="54" r="7.5" fill="url(#berry-grad)" opacity="0.88" />
              {/* Petal Highlights */}
              <circle cx="13" cy="16" r="3" fill="#fff" opacity="0.4" />
              <circle cx="27" cy="12" r="2.8" fill="#fff" opacity="0.4" />
              <circle cx="21" cy="28" r="3" fill="#fff" opacity="0.4" />
              <circle cx="35" cy="24" r="3.2" fill="#fff" opacity="0.4" />
            </g>

            {/* Big Peach Watercolor Blooming Garden Tea Rose */}
            <g transform="translate(60, 130) rotate(-10)">
              {/* Outer Petals */}
              <path
                d="M 40 10 C 15 10, -5 35, 5 65 C 15 95, 50 105, 80 95 C 110 85, 125 55, 115 30 C 105 5, 65 10, 40 10 Z"
                fill="url(#rose-petal-1)"
                opacity="0.95"
              />
              <path
                d="M 50 20 C 30 20, 15 38, 22 60 C 30 82, 58 90, 80 82 C 102 74, 110 50, 102 32 C 94 14, 70 20, 50 20 Z"
                fill="url(#rose-inner)"
                opacity="0.9"
              />
              {/* Layered Cup Petals */}
              <path
                d="M 52 32 C 38 32, 28 45, 34 60 C 40 75, 62 80, 76 72 C 90 64, 94 48, 88 38 C 82 28, 66 32, 52 32 Z"
                fill="#fbe2d2"
                opacity="0.96"
              />
              {/* Inner Swirl */}
              <path
                d="M 56 42 Q 68 38, 74 48 Q 78 58, 68 64 Q 56 66, 48 58 Q 42 48, 54 44 Z"
                fill="#d36442"
                opacity="0.85"
              />
              <path
                d="M 58 48 C 64 45, 70 50, 68 56 C 66 60, 58 60, 56 54 Z"
                fill="#ffecd9"
              />
            </g>

            {/* Olive & Rose Leaves under the bloom */}
            <path
              d="M 40 185 C 10 170, 0 195, 12 215 C 28 230, 55 215, 48 195 Z"
              fill="#4f6e42"
              opacity="0.9"
            />
            <path
              d="M 130 180 C 160 170, 175 195, 160 218 C 140 232, 115 210, 125 190 Z"
              fill="#5e8250"
              opacity="0.88"
            />
          </g>

          {/* Silver/Clear Pushpin pinned through paper (as seen in user photo) */}
          <g transform="translate(175, 290) rotate(15)">
            {/* Pushpin Shadow */}
            <ellipse cx="14" cy="28" rx="8" ry="4" fill="#2c1a0e" opacity="0.3" filter="blur(2px)" />
            {/* Silver Pin Needle Point */}
            <path d="M 12 22 L 14 30 L 16 22 Z" fill="#7d8894" />
            {/* Silver/Translucent Pin Head */}
            <path
              d="M 6 4 C 6 1, 22 1, 22 4 L 20 8 C 22 10, 24 14, 21 17 L 17 18 L 17 22 L 11 22 L 11 18 L 7 17 C 4 14, 6 10, 8 8 Z"
              fill="#cdd4dc"
              stroke="#8a95a5"
              strokeWidth="0.8"
            />
            <ellipse cx="14" cy="4" rx="7" ry="2.5" fill="#eef2f7" />
            {/* Specular highlight */}
            <ellipse cx="12" cy="11" rx="2" ry="4" fill="#ffffff" opacity="0.75" />
          </g>
        </svg>
      </div>

      {/* 4. Top-Left: Pinned Kraft Scrap with Authentic Golden Brass Dome Thumbtack */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-32 h-32 pointer-events-none">
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Brass Dome Metallic Gradient */}
            <radialGradient id="brass-dome-grad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fff6ce" />
              <stop offset="35%" stopColor="#e5b85c" />
              <stop offset="70%" stopColor="#ad7523" />
              <stop offset="100%" stopColor="#633e0d" />
            </radialGradient>
            <filter id="thumbtack-shadow" x="-30%" y="-30%" width="170%" height="170%">
              <feDropShadow dx="3" dy="4" stdDeviation="3.5" floodColor="#211308" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Corner Torn Kraft Fragment */}
          <path
            d="M 0 0 L 85 0 Q 75 25, 70 45 Q 50 65, 30 75 Q 15 80, 0 85 Z"
            fill="#d2b899"
            stroke="#be9f7d"
            strokeWidth="0.8"
            opacity="0.8"
          />
          {/* Deckle fringe */}
          <path
            d="M 85 0 Q 75 25, 70 45 Q 50 65, 30 75 Q 15 80, 0 85"
            stroke="#fffdf8"
            strokeWidth="2.5"
            fill="none"
            opacity="0.75"
          />

          {/* Golden Brass Round Pushpin (Dome Thumbtack) */}
          <g transform="translate(32, 28)">
            {/* Ambient occlusion shadow */}
            <circle cx="12" cy="14" r="14" fill="#1f1105" opacity="0.35" filter="blur(3px)" />
            {/* Main Brass Metallic Sphere */}
            <circle
              cx="12"
              cy="12"
              r="13"
              fill="url(#brass-dome-grad)"
              stroke="#59370c"
              strokeWidth="0.8"
              filter="url(#thumbtack-shadow)"
            />
            {/* Bright Specular Glint */}
            <ellipse cx="8" cy="8" rx="3.5" ry="2" transform="rotate(-30, 8, 8)" fill="#ffffff" opacity="0.85" />
            {/* Rim light */}
            <circle cx="12" cy="12" r="12" stroke="#fff9e0" strokeWidth="0.6" fill="none" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* 5. Subtle Wrinkles & Paper Fold Lines (Giving the Crumpled Look from Reference Photo) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Diagonal Creases */}
        <path
          d="M -50 200 Q 300 350, 700 280 T 1400 450"
          stroke="#523820"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 200 -50 Q 400 400, 650 800 T 900 1400"
          stroke="#fff"
          strokeWidth="0.6"
          fill="none"
          opacity="0.35"
        />
      </svg>

      {/* 6. Soft Ambient Vignette to Frame the Workspace */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(68, 44, 25, 0.22) 80%, rgba(35, 20, 10, 0.45) 100%)`,
        }}
      />
    </div>
  );
};
