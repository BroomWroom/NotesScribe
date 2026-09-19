import React from 'react';

/**
 * Intricate White Paper Lace Doily
 * Peeking out from underneath the open journal notebook corners
 */
export const PaperDoily: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none opacity-85 ${className}`}>
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
    >
      <circle cx="110" cy="110" r="105" fill="#fcfaf4" fillOpacity="0.95" />
      {/* Outer Scallops */}
      <circle cx="110" cy="110" r="102" stroke="#e8dfce" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="110" cy="110" r="95" stroke="#dcd0be" strokeWidth="1" />
      <circle cx="110" cy="110" r="88" stroke="#ebdccb" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="110" cy="110" r="74" stroke="#d5c4af" strokeWidth="1" />
      <circle cx="110" cy="110" r="62" stroke="#ebdccb" strokeWidth="1.5" strokeDasharray="2 3" />
      <circle cx="110" cy="110" r="48" stroke="#d5c4af" strokeWidth="1" />
      <circle cx="110" cy="110" r="32" fill="#f8f4eb" stroke="#ebdccb" strokeWidth="1" />

      {/* Scalloped Floral Lace Radial Petals */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 110 + 82 * Math.cos(rad);
        const y1 = 110 + 82 * Math.sin(rad);
        const x2 = 110 + 95 * Math.cos(rad);
        const y2 = 110 + 95 * Math.sin(rad);
        const dotX = 110 + 68 * Math.cos(rad);
        const dotY = 110 + 68 * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x1} cy={y1} r="4" fill="#f5ede0" stroke="#d2c0ab" strokeWidth="0.8" />
            <circle cx={x2} cy={y2} r="2.2" fill="#ede0d0" />
            <circle cx={dotX} cy={dotY} r="2.5" fill="#e8dac8" />
          </g>
        );
      })}

      {/* Inner Lace Flowers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const rad = (angle * Math.PI) / 180;
        const x = 110 + 40 * Math.cos(rad);
        const y = 110 + 40 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="3" fill="#f2e6d6" stroke="#cbb59f" strokeWidth="0.8" />;
      })}
    </svg>
  </div>
);

/**
 * Emerald Swallowtail Butterfly
 * Resting precisely on the center book crease, matching the Pinterest reference photo
 */
export const CenterSpineButterfly: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(20,12,6,0.55)] transition-transform hover:scale-105 ${className}`}
    style={{ transformOrigin: 'center center' }}
  >
    <svg
      width="90"
      height="80"
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="emeraldWingLeft" x1="45" y1="20" x2="5" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#84bc78" />
          <stop offset="45%" stopColor="#53914a" />
          <stop offset="85%" stopColor="#255422" />
          <stop offset="100%" stopColor="#122511" />
        </linearGradient>
        <linearGradient id="emeraldWingRight" x1="45" y1="20" x2="85" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#84bc78" />
          <stop offset="45%" stopColor="#53914a" />
          <stop offset="85%" stopColor="#255422" />
          <stop offset="100%" stopColor="#122511" />
        </linearGradient>
      </defs>

      {/* Left Forewing */}
      <path
        d="M44 38 C40 26, 25 8, 10 12 C2 15, 2 32, 12 44 C20 54, 38 48, 44 38 Z"
        fill="url(#emeraldWingLeft)"
        stroke="#162714"
        strokeWidth="1.2"
      />
      {/* Left Forewing Veins */}
      <path d="M42 36 C32 30, 20 22, 12 18" stroke="#162714" strokeWidth="0.9" opacity="0.75" />
      <path d="M42 36 C30 36, 18 34, 10 30" stroke="#162714" strokeWidth="0.8" opacity="0.75" />
      <path d="M42 36 C33 42, 22 44, 14 42" stroke="#162714" strokeWidth="0.8" opacity="0.7" />

      {/* Right Forewing */}
      <path
        d="M46 38 C50 26, 65 8, 80 12 C88 15, 88 32, 78 44 C70 54, 52 48, 46 38 Z"
        fill="url(#emeraldWingRight)"
        stroke="#162714"
        strokeWidth="1.2"
      />
      {/* Right Forewing Veins */}
      <path d="M48 36 C58 30, 70 22, 78 18" stroke="#162714" strokeWidth="0.9" opacity="0.75" />
      <path d="M48 36 C60 36, 72 34, 80 30" stroke="#162714" strokeWidth="0.8" opacity="0.75" />
      <path d="M48 36 C57 42, 68 44, 76 42" stroke="#162714" strokeWidth="0.8" opacity="0.7" />

      {/* Left Hindwing with Swallowtail Tip */}
      <path
        d="M44 42 C38 48, 26 52, 20 62 C16 70, 22 74, 26 73 C29 72, 32 68, 32 74 C33 76, 36 74, 38 68 C41 62, 44 54, 44 42 Z"
        fill="url(#emeraldWingLeft)"
        stroke="#162714"
        strokeWidth="1.2"
      />
      {/* Right Hindwing with Swallowtail Tip */}
      <path
        d="M46 42 C52 48, 64 52, 70 62 C74 70, 68 74, 64 73 C61 72, 58 68, 58 74 C57 76, 54 74, 52 68 C49 62, 46 54, 46 42 Z"
        fill="url(#emeraldWingRight)"
        stroke="#162714"
        strokeWidth="1.2"
      />

      {/* Scalloped Wing Border Dots */}
      <circle cx="8" cy="22" r="1.2" fill="#d9f2d0" />
      <circle cx="9" cy="31" r="1.2" fill="#d9f2d0" />
      <circle cx="15" cy="40" r="1.2" fill="#d9f2d0" />
      <circle cx="82" cy="22" r="1.2" fill="#d9f2d0" />
      <circle cx="81" cy="31" r="1.2" fill="#d9f2d0" />
      <circle cx="75" cy="40" r="1.2" fill="#d9f2d0" />

      {/* Butterfly Body (Thorax and Abdomen) */}
      <ellipse cx="45" cy="40" rx="2.5" ry="12" fill="#141c13" stroke="#090d09" strokeWidth="0.8" />
      {/* Head */}
      <circle cx="45" cy="26" r="2.2" fill="#141c13" />

      {/* Antennae */}
      <path d="M44 25 C40 18, 34 14, 30 15" stroke="#141c13" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="15" r="1" fill="#141c13" />
      <path d="M46 25 C50 18, 56 14, 60 15" stroke="#141c13" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="60" cy="15" r="1" fill="#141c13" />
    </svg>
  </div>
);

/**
 * Pressed Botanical Woodland Fern
 * Accenting the right journal page margin
 */
export const PressedFernSprig: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none opacity-85 ${className}`}>
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_2px_4px_rgba(30,20,10,0.2)]"
    >
      {/* Central Stem */}
      <path d="M40 115 C38 90, 42 50, 36 8" stroke="#3d5c3b" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Pinnate Leaflets */}
      {[
        { y: 20, lW: 14, rW: 15 },
        { y: 35, lW: 22, rW: 24 },
        { y: 52, lW: 26, rW: 28 },
        { y: 70, lW: 30, rW: 32 },
        { y: 88, lW: 26, rW: 28 },
        { y: 104, lW: 18, rW: 20 },
      ].map((leaf, idx) => (
        <g key={idx}>
          {/* Left Leaflet */}
          <path
            d={`M38 ${leaf.y} C${38 - leaf.lW * 0.5} ${leaf.y - 4}, ${38 - leaf.lW} ${leaf.y + 2}, ${38 - leaf.lW * 0.8} ${leaf.y + 6} C${38 - leaf.lW * 0.3} ${leaf.y + 5}, 38 ${leaf.y + 2}, 38 ${leaf.y}`}
            fill="#4e724a"
            stroke="#365233"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Right Leaflet */}
          <path
            d={`M40 ${leaf.y} C${40 + leaf.rW * 0.5} ${leaf.y - 4}, ${40 + leaf.rW} ${leaf.y + 2}, ${40 + leaf.rW * 0.8} ${leaf.y + 6} C${40 + leaf.rW * 0.3} ${leaf.y + 5}, 40 ${leaf.y + 2}, 40 ${leaf.y}`}
            fill="#5b8253"
            stroke="#365233"
            strokeWidth="0.8"
            opacity="0.92"
          />
        </g>
      ))}
      {/* Top Tip */}
      <path d="M36 12 C34 6, 37 2, 38 2 C39 2, 40 7, 37 12 Z" fill="#628c5a" stroke="#365233" strokeWidth="0.6" />
    </svg>
  </div>
);

/**
 * Vintage Wooden Button with 4 Holes
 * Resting on the right page near bottom
 */
export const VintageWoodenButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none drop-shadow-[0_4px_8px_rgba(20,12,6,0.35)] ${className}`}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="buttonWood" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#cfb18d" />
          <stop offset="60%" stopColor="#a8855e" />
          <stop offset="100%" stopColor="#78593a" />
        </radialGradient>
      </defs>
      {/* Outer Rim */}
      <circle cx="18" cy="18" r="16.5" fill="url(#buttonWood)" stroke="#5d432b" strokeWidth="1.2" />
      {/* Depressed Inner Well */}
      <circle cx="18" cy="18" r="11" fill="#9e7b54" stroke="#5d432b" strokeWidth="0.8" />
      {/* 4 Thread Holes */}
      <circle cx="14" cy="14" r="1.8" fill="#362516" />
      <circle cx="22" cy="14" r="1.8" fill="#362516" />
      <circle cx="14" cy="22" r="1.8" fill="#362516" />
      <circle cx="22" cy="22" r="1.8" fill="#362516" />
      {/* Crossed Stitch Thread */}
      <path d="M14 14 L22 22" stroke="#ded1be" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <path d="M22 14 L14 22" stroke="#ded1be" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
    </svg>
  </div>
);

/**
 * Vintage Cello / Violin Sticker
 * Cutout on the left page of the journal
 */
export const VintageViolinSticker: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none drop-shadow-[0_4px_8px_rgba(35,20,10,0.3)] ${className}`}>
    <svg width="46" height="96" viewBox="0 0 46 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="celloVarnish" x1="0" y1="30" x2="46" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c24d36" />
          <stop offset="50%" stopColor="#a83a26" />
          <stop offset="100%" stopColor="#631e13" />
        </linearGradient>
      </defs>
      {/* Scroll & Pegbox */}
      <rect x="21" y="2" width="4" height="24" rx="1.5" fill="#3a2215" />
      <circle cx="23" cy="4" r="4" fill="#50311f" stroke="#2b170c" strokeWidth="1" />
      {/* Tuning Pegs */}
      <line x1="17" y1="12" x2="29" y2="12" stroke="#22130a" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="18" x2="29" y2="18" stroke="#22130a" strokeWidth="2" strokeLinecap="round" />
      {/* Fingerboard */}
      <rect x="21.5" y="20" width="3" height="36" fill="#1b120c" />
      {/* Upper Bout */}
      <path
        d="M23 30 C12 30, 8 38, 9 46 C10 52, 17 54, 18 56 C14 62, 7 68, 8 78 C9 88, 18 94, 23 94 C28 94, 37 88, 38 78 C39 68, 32 62, 28 56 C29 54, 36 52, 37 46 C38 38, 34 30, 23 30 Z"
        fill="url(#celloVarnish)"
        stroke="#48180f"
        strokeWidth="1.5"
      />
      {/* F-Holes */}
      <path d="M16 62 C15 65, 17 68, 16 72" stroke="#250d09" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 62 C31 65, 29 68, 30 72" stroke="#250d09" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bridge & Tailpiece */}
      <rect x="20" y="66" width="6" height="2" fill="#cbb292" />
      <path d="M21 74 L25 74 L24 88 L22 88 Z" fill="#20150e" />
      {/* 4 Fine Strings */}
      <line x1="22" y1="12" x2="22.5" y2="74" stroke="#e8dfce" strokeWidth="0.5" opacity="0.8" />
      <line x1="22.7" y1="12" x2="23" y2="74" stroke="#e8dfce" strokeWidth="0.5" opacity="0.8" />
      <line x1="23.3" y1="12" x2="23.5" y2="74" stroke="#e8dfce" strokeWidth="0.5" opacity="0.8" />
      <line x1="24" y1="12" x2="24" y2="74" stroke="#e8dfce" strokeWidth="0.5" opacity="0.8" />
    </svg>
  </div>
);

/**
 * Authentic Vintage Brass & Black Wire Binder Clip
 * Clipped over the top-right corner of the journal pages
 */
export const VintageWireBinderClip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none drop-shadow-[0_8px_14px_rgba(20,10,5,0.6)] ${className}`}>
    <svg width="44" height="60" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folded Wire Loops (Antique Brass / Gold) */}
      <path
        d="M14 2 C14 2, 14 24, 14 28 C14 31, 16 33, 19 33 C22 33, 24 31, 24 28 C24 24, 24 2, 24 2"
        stroke="#cfad67"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 2 C20 2, 20 24, 20 28 C20 31, 22 33, 25 33 C28 33, 30 31, 30 28 C30 24, 30 2, 30 2"
        stroke="#deb872"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Black Spring Steel Clip Body */}
      <polygon
        points="6,26 38,26 42,46 2,46"
        fill="#261d18"
        stroke="#150f0c"
        strokeWidth="1.2"
      />
      {/* Brass Lip Accent */}
      <line x1="4" y1="45" x2="40" y2="45" stroke="#b89353" strokeWidth="1.8" />
      {/* Soft Clip Body Highlight */}
      <line x1="8" y1="28" x2="36" y2="28" stroke="#4a372c" strokeWidth="1" opacity="0.7" />
    </svg>
  </div>
);

/**
 * Left Desk Ephemera Stack:
 * Sheet music paper + HENNESSY ROAD ticket booklet with dark linen spine
 */
export const LeftDeskEphemera: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none hidden 2xl:block ${className}`}>
    {/* Sheet Music Scrap */}
    <div
      className="w-48 h-64 p-3 bg-[#f2ecdd] border border-[#d3c2a6] rounded-sm shadow-[0_10px_25px_rgba(20,12,6,0.38)] transform -rotate-12 overflow-hidden opacity-90"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent 0px, transparent 18px, #b09e85 19px, transparent 20px, transparent 24px, #b09e85 25px, transparent 26px, transparent 30px, #b09e85 31px, transparent 32px, transparent 36px, #b09e85 37px, transparent 38px, transparent 42px, #b09e85 43px, transparent 44px, transparent 60px)',
      }}
    >
      <div className="font-serif text-[10px] font-bold text-[#624730] uppercase tracking-wider mb-2 opacity-75">
        THE BROKEN NOTE
      </div>
      <div className="font-mono text-[8px] text-[#7d6046] italic">Sonata No. 12 in D Minor • Andante con moto</div>
      {/* Musical notes glyphs */}
      <div className="font-serif text-sm text-[#483321] opacity-70 mt-6 space-x-2">
        ♩ ♪ ♫ ♬ ♩ ♭ ♮ ♯
      </div>
    </div>

    {/* Hennessy Road Ticket Booklet (Stacked On Top) */}
    <div className="w-36 h-56 p-3.5 bg-[#fdfbf6] border border-[#d6c7b0] rounded-sm shadow-[0_14px_30px_rgba(20,12,6,0.45)] transform -rotate-3 -mt-44 ml-8 relative overflow-hidden">
      {/* Black Tape Binding at Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#1f1a17] shadow-xs" />
      <div className="mt-5 text-center">
        <div className="font-serif text-xs font-bold text-[#2d1e15] tracking-widest uppercase border-b border-[#ded1be] pb-1">
          HENNESSY ROAD
        </div>
        <div className="font-mono text-[8px] text-[#9c5a45] uppercase tracking-wider mt-1">
          NIGHT PASSENGER
        </div>
        <div className="font-mono text-[9px] text-[#7b6149] mt-3">
          № 884-219-0
        </div>
        <div className="border border-dashed border-[#bfae95] p-2 mt-4 text-[7px] font-mono text-[#614935] leading-tight">
          Keep this coupon in good order. Transferable on all district lines.
        </div>
      </div>
    </div>

    {/* Paris Metro Stub Tucked Underneath */}
    <div className="w-32 p-2 bg-[#ecd8c3] border border-[#a8825f] rounded-xs shadow-md transform rotate-6 -mt-16 ml-14 relative z-10 text-center font-mono">
      <div className="text-[8px] font-extrabold text-[#704620] uppercase tracking-wider">
        METROPOLITAIN
      </div>
      <div className="text-[7px] text-[#87623d]">2ème Classe • Urbain</div>
      <div className="text-[8px] text-[#9c3a21] font-bold mt-0.5">№ 4892</div>
    </div>
  </div>
);

/**
 * Right Desk Vintage Tickets Stack
 * Manila luggage claim tag, star cinema stub, and transit slips
 */
export const RightDeskTickets: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none hidden 2xl:block ${className}`}>
    {/* Grand Hotel Luggage Claim Tag */}
    <div className="w-36 h-52 p-3 bg-[#e8d5bc] border border-[#be9f79] rounded-sm shadow-[0_12px_28px_rgba(20,12,6,0.4)] transform rotate-8 relative overflow-visible">
      {/* Brass Eyelet at Top */}
      <div className="w-4 h-4 rounded-full border-2 border-[#b89558] bg-[#61452a] mx-auto flex items-center justify-center shadow-inner">
        <div className="w-1.5 h-1.5 rounded-full bg-[#241810]" />
      </div>
      {/* String hanging */}
      <div className="w-0.5 h-6 bg-[#bda482] mx-auto -mt-1 opacity-70" />

      <div className="text-center mt-3">
        <div className="font-serif text-[10px] font-bold text-[#3d2716] tracking-widest uppercase border-b border-[#a88560] pb-1">
          GRAND HOTEL
        </div>
        <div className="font-mono text-[8px] text-[#825732] uppercase tracking-wider mt-1">
          BAGGAGE CLAIM
        </div>
        <div className="font-mono text-xs font-black text-[#852a1b] mt-3">
          № 73-441
        </div>
        <div className="font-mono text-[7px] text-[#61452d] mt-2 border-t border-dashed border-[#a88560] pt-1">
          DELIVERED AT STATION
        </div>
      </div>
    </div>

    {/* Vintage Red Star Cinema Ticket Stub (Overlapping) */}
    <div className="w-32 p-2.5 bg-[#f0e3d1] border-2 border-[#a37951] rounded-xs shadow-lg transform -rotate-6 -mt-36 -ml-4 relative z-10 text-center font-mono">
      <div className="text-[7px] font-bold uppercase tracking-widest text-[#7a4823] border-b border-[#a37951] pb-0.5">
        ADMIT ONE
      </div>
      <div className="font-serif text-xs font-black tracking-widest text-[#8a331a] my-0.5">
        ★ CINEMA ★
      </div>
      <div className="text-[7px] text-[#5e412b] tracking-wider font-semibold">
        № 008431
      </div>
    </div>

    {/* Chocolat Beyers Confectioner Ticket */}
    <div className="w-32 p-2 bg-[#dfc4a4] text-[#3d2413] border border-[#a88661] rounded-xs shadow-md font-mono text-center transform rotate-3 -mt-10 ml-6 relative z-20">
      <div className="border border-dashed border-[#8d6945] p-1">
        <div className="font-serif text-[8px] font-bold uppercase tracking-wider">
          CHOCOLAT BEYERS
        </div>
        <div className="text-[6px] opacity-75">1888 SMILE WORKSHOP</div>
      </div>
    </div>
  </div>
);
