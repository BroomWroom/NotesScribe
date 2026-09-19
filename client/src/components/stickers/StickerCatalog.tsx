import React from 'react';

export interface StickerMeta {
  id: string;
  name: string;
  category: 'quotes' | 'tickets' | 'postage' | 'botanical' | 'craft';
  description: string;
  render: React.FC<{ className?: string }>;
}

/* ==========================================================================
   1. CREATIVE & ARTSY QUOTE STICKERS (Fresh, unique, vintage typewriter style)
   ========================================================================== */

/**
 * Creative Quote 1: Wander (Tolkien)
 */
export const QuoteWanderSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none px-3.5 py-2 bg-[#fdfbf7] text-[#2c1d12] border border-[#cfbfa8] rounded-xs shadow-md font-mono min-w-[170px] ${className}`}>
    <div className="border-l-2 border-[#8c5e39] pl-2">
      <div className="text-[9px] font-bold tracking-wide italic leading-snug">
        &ldquo;Not all those who wander are lost.&rdquo;
      </div>
      <div className="text-[7px] text-[#7a593e] uppercase tracking-widest mt-1 opacity-70">
        — J.R.R. Tolkien
      </div>
    </div>
  </div>
);

/**
 * Creative Quote 2: Quiet Corners of Time
 */
export const QuoteTimeSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-3 bg-[#f5ecde] text-[#382415] border border-[#c4ae94] rounded-xs shadow-md font-serif min-w-[180px] relative ${className}`}>
    <div className="border border-dashed border-[#8d6945]/30 p-2">
      <div className="font-mono text-[6.5px] uppercase tracking-widest text-[#8d6945] opacity-75 mb-1">
        № 14 • Field Journal
      </div>
      <div className="text-[10px] font-bold italic leading-relaxed text-[#2f1b0c]">
        In the quiet corners of time, memories take root.
      </div>
    </div>
  </div>
);

/**
 * Creative Quote 3: To Plant a Garden (Audrey Hepburn)
 */
export const QuoteGardenSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none px-3 py-2.5 bg-[#edf5ee] text-[#1e3321] border border-[#b2cfb6] rounded-xs shadow-md font-serif min-w-[175px] ${className}`}>
    <div className="flex items-center gap-1 text-[7px] font-mono text-[#4b7a50] uppercase tracking-wider mb-1">
      <span>✦</span>
      <span>Botanique Pensée</span>
    </div>
    <div className="text-[10px] font-bold italic leading-snug text-[#1a2d1d]">
      &ldquo;To plant a garden is to believe in tomorrow.&rdquo;
    </div>
    <div className="text-[7px] font-mono opacity-70 text-right mt-1">
      — Audrey Hepburn
    </div>
  </div>
);

/**
 * Creative Quote 4: Poetry in Unread Pages
 */
export const QuotePagesSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none px-3.5 py-2.5 bg-[#faf7ef] text-[#2c1d12] border-t-2 border-b-2 border-[#b89f80] shadow-md font-mono min-w-[185px] ${className}`}>
    <div className="text-[9.5px] leading-relaxed text-[#301f13]">
      <span className="text-[#993424] font-serif text-base font-bold mr-1">&ldquo;</span>
      She found poetry in the worn pages of an unread book.
    </div>
    <div className="text-[6.5px] text-[#78593a] uppercase tracking-widest mt-1 opacity-60 text-right">
      Library Notes • Oct 1974
    </div>
  </div>
);

/**
 * Creative Quote 5: French Memories (Le temps passe)
 */
export const QuoteFrenchSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#fefcf8] text-[#2d1b0f] border border-[#d6c7b2] rounded-xs shadow-md font-serif min-w-[170px] ${className}`}>
    <div className="text-[10px] font-bold italic text-[#633919] leading-snug">
      &laquo; Le temps passe, mais la beauté des souvenirs demeure. &raquo;
    </div>
    <div className="text-[7px] font-mono text-[#8a684b] mt-1 border-t border-[#d6c7b2]/40 pt-1">
      Time passes, beauty remains &bull; Paris 1928
    </div>
  </div>
);

/**
 * Creative Quote 6: Constellations
 */
export const QuoteConstellationsSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none px-3 py-2 bg-[#e8f1f5] text-[#142833] border border-[#a8c6d4] rounded-xs shadow-md font-mono min-w-[180px] ${className}`}>
    <div className="text-[6.5px] text-[#3b677a] uppercase tracking-wider mb-0.5">
      Cyanotype Night Sky
    </div>
    <div className="text-[9.5px] font-bold leading-relaxed text-[#10222c]">
      We are stitched together by common constellations.
    </div>
  </div>
);

/**
 * Creative Quote 7: Room for the Unimaginable (Mary Oliver)
 */
export const QuoteUnimaginableSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#f5efe3] text-[#332214] border-l-3 border-[#8c5931] shadow-md font-serif min-w-[175px] ${className}`}>
    <div className="text-[10px] font-bold italic text-[#2b190c] leading-snug">
      &ldquo;Keep some room in your heart for the unimaginable.&rdquo;
    </div>
    <div className="font-mono text-[7px] text-[#735133] mt-1 opacity-75">
      — Mary Oliver
    </div>
  </div>
);

/* ==========================================================================
   2. VINTAGE TICKETS & EPHEMERA (User's favorite category!)
   ========================================================================== */

/**
 * Chocolat Beyers Confectioner Ticket
 */
export const ChocolatBeyersTicket: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#dfc4a4] text-[#3d2413] border border-[#a88661] rounded-xs shadow-md font-mono text-center min-w-[125px] ${className}`}>
    <div className="border border-dashed border-[#8d6945] p-1.5">
      <div className="font-serif text-[10px] font-extrabold uppercase tracking-widest leading-none">
        CHOCOLAT BEYERS
      </div>
      <div className="text-[7px] tracking-wider uppercase opacity-80 mt-0.5">
        &bull; DOWLS 1888 SMILE WORKSHOP &bull;
      </div>
      <div className="border-t border-[#8d6945]/40 mt-1 pt-0.5 text-[6px] opacity-75 font-mono">
        NO. 49-21-98 B
      </div>
    </div>
  </div>
);

/**
 * Orient Express Luxury Train Ticket
 */
export const OrientExpressTicket: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#f6eee0] text-[#2c1a0e] border border-[#b89569] rounded-xs shadow-md font-serif min-w-[155px] ${className}`}>
    <div className="border-b border-[#b89569] pb-1 text-center">
      <div className="text-[8px] font-black uppercase tracking-widest text-[#7a481e]">
        ORIENT EXPRESS
      </div>
      <div className="font-mono text-[6.5px] text-[#856345] uppercase">
        Paris &bull; Venise &bull; Constantinople
      </div>
    </div>
    <div className="flex justify-between items-center mt-1 text-[7px] font-mono text-[#5c3c22]">
      <span>VOITURE-LITS № 12</span>
      <span className="font-bold text-[#a62b1b]">1ère CLASSE</span>
    </div>
  </div>
);

/**
 * Grand Hotel Bellagio Luggage Label
 */
export const HotelLuggageLabel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#e4cfb4] text-[#2d1c0e] border-2 border-[#8a6339] rounded-xs shadow-md font-serif text-center min-w-[130px] ${className}`}>
    <div className="text-[7px] font-mono text-[#8a4220] uppercase tracking-widest mb-0.5">
      &starf; LAGO DI COMO &starf;
    </div>
    <div className="text-[10px] font-black uppercase tracking-wider text-[#381f0b] border-t border-b border-[#8a6339]/50 py-0.5">
      GRAND HOTEL
    </div>
    <div className="font-mono text-[7px] text-[#5e3f22] mt-0.5">
      BELLAGIO &bull; ITALIA
    </div>
  </div>
);

/**
 * Paris Metro Transit Ticket
 */
export const ParisMetroTicket: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2 bg-[#f4ece1] text-[#332214] border border-[#b89f82] rounded-xs shadow-md font-mono min-w-[110px] relative ${className}`}>
    <div className="absolute left-0 top-0 bottom-0 w-1 border-r border-dotted border-[#8c6b4b]" />
    <div className="pl-1.5 text-center">
      <div className="text-[8px] font-extrabold uppercase tracking-wider text-[#734a26]">
        METROPOLITAIN
      </div>
      <div className="text-[7px] opacity-75 font-serif italic">
        2&egrave;me Classe &bull; Urbain
      </div>
      <div className="font-mono text-[9px] font-bold text-[#9e3a24] mt-1 tracking-widest">
        &bull; 4892 &bull;
      </div>
    </div>
  </div>
);

/**
 * Vintage Cinema Admission Stub
 */
export const CinemaAdmissionStub: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2 bg-[#ecd8c3] text-[#422413] border-2 border-[#a37951] rounded-xs shadow-md font-mono text-center min-w-[100px] relative ${className}`}>
    <div className="text-[8px] font-bold uppercase tracking-widest border-b border-[#a37951] pb-0.5">
      ADMIT ONE
    </div>
    <div className="font-serif text-sm font-black tracking-widest text-[#8a331a] my-0.5">
      &starf; CINEMA &starf;
    </div>
    <div className="text-[7px] tracking-wider opacity-70">
      N&deg; 008431
    </div>
  </div>
);

/**
 * Hennessy Road Passenger Slip
 */
export const HennessyRoadSlip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none w-28 bg-[#fdfbf7] text-[#2b1b11] border border-[#d3c2a6] rounded-xs shadow-md overflow-hidden ${className}`}>
    <div className="h-3 bg-[#241c17] w-full" />
    <div className="p-2 text-center">
      <div className="font-serif text-[10px] font-bold tracking-widest uppercase border-b border-[#ded1be] pb-0.5">
        HENNESSY ROAD
      </div>
      <div className="font-mono text-[7px] text-[#9c5a45] uppercase tracking-wider mt-0.5">
        PASSENGER SLIP
      </div>
      <div className="font-mono text-[8px] text-[#7b6149] mt-1 font-semibold">
        № 884-219-0
      </div>
    </div>
  </div>
);

/* ==========================================================================
   3. POSTAGE STAMPS, SEALS & BOOKPLATES
   ========================================================================== */

/**
 * Antique Ex Libris Bookplate
 */
export const ExLibrisBookplate: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-2.5 bg-[#faf6ed] text-[#2c190c] border-2 border-[#7a5834] rounded-xs shadow-md font-serif text-center min-w-[115px] ${className}`}>
    <div className="border border-[#7a5834]/40 p-1.5 flex flex-col items-center">
      <div className="text-[9px] font-black uppercase tracking-widest text-[#613e1c]">
        EX LIBRIS
      </div>
      {/* Tree of knowledge icon */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="my-1 opacity-80">
        <path d="M11 20 L11 10" stroke="#4a2e16" strokeWidth="1.2" />
        <path d="M11 10 C6 9, 4 4, 11 2 C18 4, 16 9, 11 10 Z" fill="#6d8a64" stroke="#364d30" strokeWidth="0.8" />
        <path d="M7 19 L15 19" stroke="#4a2e16" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <div className="font-mono text-[6.5px] italic opacity-75">
        De la Bibliothèque
      </div>
    </div>
  </div>
);

/**
 * Vintage Botanical 15c Postage Stamp
 */
export const BotanicalPostageStamp: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-1 bg-[#faf7ef] border-2 border-dashed border-[#b89f81] shadow-md rounded-xs flex flex-col items-center w-16 h-20 ${className}`}>
    <div className="w-full h-full border border-[#8a6845]/40 p-1 flex flex-col items-center justify-between bg-[#f0f5ed]">
      <div className="w-full flex justify-between text-[7px] font-mono text-[#435c3c] font-bold">
        <span>POST</span>
        <span>15&cent;</span>
      </div>
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="my-auto opacity-80">
        <path d="M12 26 C12 18, 13 10, 11 4" stroke="#3b5c37" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="9" cy="14" rx="4" ry="2" fill="#587d53" transform="rotate(-30 9 14)" />
        <ellipse cx="15" cy="11" rx="4" ry="2" fill="#587d53" transform="rotate(30 15 11)" />
        <circle cx="11" cy="4" r="3" fill="#cfb763" />
      </svg>
      <div className="text-[6px] font-serif uppercase tracking-widest text-[#3b5c37]">
        BOTANIQUE
      </div>
    </div>
  </div>
);

/**
 * Airmail Registered Envelope Stamp
 */
export const AirmailStamp: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none px-2.5 py-1 bg-[#fefdfa] border border-[#1b3d63] shadow-md rounded-xs font-mono text-center ${className}`}>
    <div className="text-[7px] font-black uppercase tracking-widest text-[#1b3d63] border-b border-[#1b3d63] pb-0.5">
      PAR AVION / AIR MAIL
    </div>
    <div className="text-[9px] font-bold text-[#a62b21] tracking-widest mt-0.5">
      REGISTR&Eacute; № 552
    </div>
  </div>
);

/**
 * Postal Cancellation Mark (Red/Sepia Ink Ring)
 */
export const PostalCancellationMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none opacity-80 pointer-events-none ${className}`}>
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
      <circle cx="34" cy="34" r="30" stroke="#99382b" strokeWidth="1.5" strokeDasharray="5 3" />
      <circle cx="34" cy="34" r="22" stroke="#99382b" strokeWidth="0.8" />
      <text x="34" y="27" textAnchor="middle" fill="#99382b" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
        POST REGISTERED
      </text>
      <text x="34" y="38" textAnchor="middle" fill="#99382b" fontSize="9" fontFamily="monospace" fontWeight="bold">
        19-11-66
      </text>
      <text x="34" y="47" textAnchor="middle" fill="#99382b" fontSize="6" fontFamily="monospace">
        OFFICIAL
      </text>
      <path d="M54 28 Q59 26, 64 28" stroke="#99382b" strokeWidth="1" />
      <path d="M54 34 Q59 32, 64 34" stroke="#99382b" strokeWidth="1" />
      <path d="M54 40 Q59 38, 64 40" stroke="#99382b" strokeWidth="1" />
    </svg>
  </div>
);

/**
 * Crimson Monogram Wax Seal
 */
export const CrimsonWaxSeal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_4px_8px_rgba(40,10,10,0.4)] ${className}`}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <defs>
        <radialGradient id="waxRed" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#c73c2a" />
          <stop offset="65%" stopColor="#9c2013" />
          <stop offset="100%" stopColor="#5e0f07" />
        </radialGradient>
      </defs>
      <path
        d="M22 2 C32 1, 41 9, 42 20 C43 27, 40 36, 33 41 C25 45, 15 44, 8 38 C1 31, 2 20, 5 11 C8 3, 14 3, 22 2 Z"
        fill="url(#waxRed)"
        stroke="#450a04"
        strokeWidth="1.2"
      />
      <circle cx="22" cy="22" r="13" fill="#871b0f" stroke="#520c06" strokeWidth="0.8" />
      <text x="22" y="27" textAnchor="middle" fill="#deb471" fontSize="13" fontFamily="serif" fontWeight="bold">
        S
      </text>
    </svg>
  </div>
);

/**
 * Antique Brass Wax Seal
 */
export const GoldWaxSeal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_4px_8px_rgba(20,15,5,0.4)] ${className}`}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <defs>
        <radialGradient id="waxGold" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f3dd97" />
          <stop offset="65%" stopColor="#c49b4c" />
          <stop offset="100%" stopColor="#7a5923" />
        </radialGradient>
      </defs>
      <path
        d="M22 3 C31 2, 40 10, 41 21 C42 28, 38 37, 32 41 C24 44, 14 43, 8 37 C2 30, 3 19, 6 10 C9 3, 15 4, 22 3 Z"
        fill="url(#waxGold)"
        stroke="#594017"
        strokeWidth="1.2"
      />
      <circle cx="22" cy="22" r="13" fill="#a88339" stroke="#664d1d" strokeWidth="0.8" />
      <text x="22" y="27" textAnchor="middle" fill="#fff5d9" fontSize="12" fontFamily="serif" fontWeight="bold">
        &starf;
      </text>
    </svg>
  </div>
);

/* ==========================================================================
   4. PRESSED BOTANICALS
   ========================================================================== */

/**
 * Pressed French Lavender Sprig
 */
export const PressedLavenderSprig: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none opacity-90 drop-shadow-[0_2px_5px_rgba(30,20,10,0.25)] ${className}`}>
    <svg width="45" height="90" viewBox="0 0 45 90" fill="none">
      <path d="M22 90 C22 60, 24 35, 23 4" stroke="#4a6142" strokeWidth="1.3" strokeLinecap="round" />
      {[
        { y: 8, off: -3 }, { y: 14, off: 4 }, { y: 20, off: -4 },
        { y: 26, off: 3 }, { y: 32, off: -3 }, { y: 38, off: 4 },
        { y: 44, off: -2 },
      ].map((b, i) => (
        <g key={i}>
          <ellipse cx={22 + b.off} cy={b.y} rx="3" ry="4" fill="#7a628a" stroke="#564263" strokeWidth="0.6" />
          <ellipse cx={22 - b.off * 0.5} cy={b.y + 2} rx="2.5" ry="3.5" fill="#8f76a1" />
        </g>
      ))}
      <path d="M22 65 C18 60, 12 58, 8 60" stroke="#4a6142" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 55 C26 50, 32 48, 36 51" stroke="#4a6142" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

/**
 * Pressed Woodland Fern Sprig
 */
export const PressedWoodlandFern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none opacity-90 drop-shadow-[0_2px_4px_rgba(25,18,10,0.25)] ${className}`}>
    <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
      <path d="M30 86 C29 65, 31 38, 28 6" stroke="#365434" strokeWidth="1.5" strokeLinecap="round" />
      {[
        { y: 16, lW: 10, rW: 11 },
        { y: 28, lW: 16, rW: 17 },
        { y: 42, lW: 20, rW: 21 },
        { y: 56, lW: 22, rW: 23 },
        { y: 70, lW: 18, rW: 19 },
      ].map((l, i) => (
        <g key={i}>
          <path
            d={`M29 ${l.y} C${29 - l.lW * 0.5} ${l.y - 3}, ${29 - l.lW} ${l.y + 2}, ${29 - l.lW * 0.8} ${l.y + 5} Z`}
            fill="#476b43"
            stroke="#2d452b"
            strokeWidth="0.7"
          />
          <path
            d={`M30 ${l.y} C${30 + l.rW * 0.5} ${l.y - 3}, ${30 + l.rW} ${l.y + 2}, ${30 + l.rW * 0.8} ${l.y + 5} Z`}
            fill="#527a4d"
            stroke="#2d452b"
            strokeWidth="0.7"
          />
        </g>
      ))}
    </svg>
  </div>
);

/**
 * Dried Chamomile Daisy Flower
 */
export const DriedChamomileDaisy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none opacity-90 drop-shadow-[0_2px_5px_rgba(30,20,10,0.25)] ${className}`}>
    <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
      <path d="M25 25 C25 40, 24 55, 26 68" stroke="#4d6b41" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M25 45 C28 42, 33 41, 35 44" stroke="#4d6b41" strokeWidth="1" strokeLinecap="round" />
      {Array.from({ length: 10 }).map((_, i) => {
        const rad = (i * 36 * Math.PI) / 180;
        const x = 25 + 11 * Math.cos(rad);
        const y = 22 + 11 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="5"
            ry="2.5"
            fill="#faf7eb"
            stroke="#d4caa8"
            strokeWidth="0.6"
            transform={`rotate(${(i * 360) / 10} ${x} ${y})`}
          />
        );
      })}
      <circle cx="25" cy="22" r="5" fill="#c99738" stroke="#87611f" strokeWidth="0.8" />
    </svg>
  </div>
);

/**
 * Pressed Golden Ginkgo Leaf
 */
export const PressedGinkgoLeaf: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none opacity-90 drop-shadow-[0_3px_6px_rgba(30,20,10,0.25)] ${className}`}>
    <svg width="56" height="60" viewBox="0 0 56 60" fill="none">
      <path d="M28 32 C28 42, 29 52, 30 58" stroke="#7a5d30" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M28 32 C20 28, 6 22, 8 10 C18 6, 26 12, 28 16 C30 12, 38 6, 48 10 C50 22, 36 28, 28 32 Z"
        fill="#cca84e"
        stroke="#8f7027"
        strokeWidth="1.2"
      />
      <path d="M28 30 L16 12" stroke="#8f7027" strokeWidth="0.6" opacity="0.6" />
      <path d="M28 30 L22 10" stroke="#8f7027" strokeWidth="0.6" opacity="0.6" />
      <path d="M28 30 L34 10" stroke="#8f7027" strokeWidth="0.6" opacity="0.6" />
      <path d="M28 30 L40 12" stroke="#8f7027" strokeWidth="0.6" opacity="0.6" />
    </svg>
  </div>
);

/* ==========================================================================
   5. CRAFT HABERDASHERY & VINTAGE OBJECTS
   ========================================================================== */

/**
 * Victorian Brass Skeleton Key
 */
export const BrassSkeletonKey: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_4px_8px_rgba(20,10,5,0.45)] ${className}`}>
    <svg width="34" height="74" viewBox="0 0 34 74" fill="none">
      <defs>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="34" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8c878" />
          <stop offset="50%" stopColor="#bfa04e" />
          <stop offset="100%" stopColor="#7a5c20" />
        </linearGradient>
      </defs>
      {/* Bow (Ornate Ring Handle) */}
      <circle cx="17" cy="14" r="11" fill="none" stroke="url(#brassGrad)" strokeWidth="3" />
      <circle cx="17" cy="14" r="5" fill="none" stroke="url(#brassGrad)" strokeWidth="1.5" />
      {/* Stem / Barrel */}
      <line x1="17" y1="25" x2="17" y2="68" stroke="url(#brassGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="17" cy="68" r="2.5" fill="url(#brassGrad)" />
      {/* Key Bit (Teeth) */}
      <path d="M17 52 L26 52 L26 57 L21 57 L21 62 L26 62 L26 66 L17 66 Z" fill="url(#brassGrad)" stroke="#523910" strokeWidth="0.8" />
    </svg>
  </div>
);

/**
 * 14K Gold Calligraphy Fountain Pen Nib
 */
export const FountainPenNib: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_4px_8px_rgba(25,15,5,0.45)] ${className}`}>
    <svg width="34" height="66" viewBox="0 0 34 66" fill="none">
      <defs>
        <linearGradient id="nibGold" x1="0" y1="0" x2="34" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f7e699" />
          <stop offset="45%" stopColor="#d4af4b" />
          <stop offset="100%" stopColor="#876722" />
        </linearGradient>
      </defs>
      {/* Nib Body */}
      <path
        d="M6 62 L8 36 C8 24, 15 14, 17 2 C19 14, 26 24, 26 36 L28 62 Z"
        fill="url(#nibGold)"
        stroke="#573e10"
        strokeWidth="1.2"
      />
      {/* Slit & Breather Hole */}
      <line x1="17" y1="2" x2="17" y2="28" stroke="#332207" strokeWidth="1" strokeLinecap="round" />
      <circle cx="17" cy="28" r="2.2" fill="#291b05" stroke="#ffe085" strokeWidth="0.6" />
      {/* Scroll Engraving */}
      <path d="M11 36 C13 32, 17 32, 17 35 C17 32, 21 32, 23 36" stroke="#47310a" strokeWidth="0.8" fill="none" />
      <text x="17" y="47" textAnchor="middle" fill="#3b2707" fontSize="5.5" fontFamily="serif" fontWeight="bold">
        14K
      </text>
    </svg>
  </div>
);

/**
 * Vintage 35mm Film Slide Frame
 */
export const FilmSlideFrame: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none p-3 bg-[#faf5e8] border-2 border-[#bfa588] rounded-xs shadow-md w-28 h-28 flex flex-col items-center justify-between ${className}`}>
    <div className="w-full flex justify-between text-[6.5px] font-mono text-[#8a684b] uppercase">
      <span>KODACHROME</span>
      <span>EXP 24</span>
    </div>
    {/* Inner Slide Window */}
    <div className="w-16 h-14 bg-[#211a14] border border-[#785b3b] shadow-inner flex items-center justify-center">
      <div className="text-[7px] font-mono text-[#d6c4a8] opacity-60">35mm</div>
    </div>
    <div className="w-full flex justify-between text-[6.5px] font-mono text-[#8a684b]">
      <span>SEP 1968</span>
      <span>№ 18</span>
    </div>
  </div>
);

/**
 * Turned 4-Hole Wooden Button
 */
export const VintageWoodButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_3px_6px_rgba(25,15,5,0.35)] ${className}`}>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <defs>
        <radialGradient id="btnWoodGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#d1b28e" />
          <stop offset="60%" stopColor="#aa875f" />
          <stop offset="100%" stopColor="#7a5734" />
        </radialGradient>
      </defs>
      <circle cx="17" cy="17" r="15" fill="url(#btnWoodGrad)" stroke="#523920" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="10" fill="#9e7b54" stroke="#523920" strokeWidth="0.8" />
      <circle cx="13" cy="13" r="1.6" fill="#301f11" />
      <circle cx="21" cy="13" r="1.6" fill="#301f11" />
      <circle cx="13" cy="21" r="1.6" fill="#301f11" />
      <circle cx="21" cy="21" r="1.6" fill="#301f11" />
      <line x1="13" y1="13" x2="21" y2="21" stroke="#ded1be" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
      <line x1="21" y1="13" x2="13" y2="21" stroke="#ded1be" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
    </svg>
  </div>
);

/**
 * Antique Brass Wire Binder Clip
 */
export const BrassBinderClip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none drop-shadow-[0_4px_8px_rgba(20,10,5,0.5)] ${className}`}>
    <svg width="32" height="44" viewBox="0 0 32 44" fill="none">
      <path
        d="M10 2 C10 2, 10 18, 10 20 C10 23, 12 24, 14 24 C16 24, 18 23, 18 20 C18 18, 18 2, 18 2"
        stroke="#cfad67"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <polygon points="4,18 28,18 30,34 2,34" fill="#29201a" stroke="#17120e" strokeWidth="1" />
      <line x1="3" y1="33" x2="29" y2="33" stroke="#b89353" strokeWidth="1.5" />
    </svg>
  </div>
);

/**
 * Delicate Scalloped Lace Washi Tape
 */
export const LaceWashiTapeStrip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none washi-tape-lace h-6 px-4 flex items-center justify-center rounded-xs shadow-sm ${className}`} style={{ minWidth: '100px' }}>
    <div className="w-full border-t border-dashed border-[#8d6945]/40" />
  </div>
);

/**
 * Torn Brown Kraft Masking Tape
 */
export const KraftTapeStrip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`select-none h-6 px-3 bg-[#dfcaa5] border-t border-b border-[#bfa27a] flex items-center justify-center shadow-xs opacity-90 ${className}`} style={{ minWidth: '90px' }}>
    <div className="w-full border-t border-dotted border-[#785b3b]/30" />
  </div>
);

/* ==========================================================================
   MASTER CATALOG OF STICKERS
   ========================================================================== */

export const STICKER_CATALOG: StickerMeta[] = [
  // 1. Creative & Artsy Quotes
  {
    id: 'quote-wander',
    name: 'Wander Typewriter Quote',
    category: 'quotes',
    description: '“Not all those who wander are lost” — J.R.R. Tolkien',
    render: QuoteWanderSlip,
  },
  {
    id: 'quote-time',
    name: 'Quiet Corners Quote',
    category: 'quotes',
    description: '“In the quiet corners of time, memories take root.”',
    render: QuoteTimeSlip,
  },
  {
    id: 'quote-garden',
    name: 'Garden & Tomorrow Quote',
    category: 'quotes',
    description: '“To plant a garden is to believe in tomorrow” — Audrey Hepburn',
    render: QuoteGardenSlip,
  },
  {
    id: 'quote-pages',
    name: 'Unread Pages Poetry',
    category: 'quotes',
    description: '“She found poetry in the worn pages of an unread book.”',
    render: QuotePagesSlip,
  },
  {
    id: 'quote-french',
    name: 'French Souvenirs Script',
    category: 'quotes',
    description: '« Le temps passe, mais la beauté des souvenirs demeure. »',
    render: QuoteFrenchSlip,
  },
  {
    id: 'quote-constellations',
    name: 'Constellations Cyanotype',
    category: 'quotes',
    description: '“We are stitched together by common constellations.”',
    render: QuoteConstellationsSlip,
  },
  {
    id: 'quote-unimaginable',
    name: 'Unimaginable Quote',
    category: 'quotes',
    description: '“Keep some room in your heart for the unimaginable” — Mary Oliver',
    render: QuoteUnimaginableSlip,
  },

  // 2. Vintage Tickets & Ephemera
  {
    id: 'ticket-orient-express',
    name: 'Orient Express Passage',
    category: 'tickets',
    description: 'Paris-Venise luxury sleeper car ticket',
    render: OrientExpressTicket,
  },
  {
    id: 'tag-hotel-bellagio',
    name: 'Grand Hotel Bellagio Tag',
    category: 'tickets',
    description: 'Lago di Como vintage luggage sticker',
    render: HotelLuggageLabel,
  },
  {
    id: 'ticket-chocolat',
    name: 'Chocolat Beyers Ticket',
    category: 'tickets',
    description: '1888 French confectioner ticket stub',
    render: ChocolatBeyersTicket,
  },
  {
    id: 'ticket-hennessy',
    name: 'Hennessy Road Slip',
    category: 'tickets',
    description: 'Vintage night tram passenger ticket',
    render: HennessyRoadSlip,
  },
  {
    id: 'ticket-paris-metro',
    name: 'Paris Metro Ticket',
    category: 'tickets',
    description: 'Perforated 2ème classe railway stub',
    render: ParisMetroTicket,
  },
  {
    id: 'ticket-cinema',
    name: 'Cinema Admission Stub',
    category: 'tickets',
    description: 'Classic star perforated movie ticket',
    render: CinemaAdmissionStub,
  },

  // 3. Postage, Wax Seals & Bookplates
  {
    id: 'label-ex-libris',
    name: 'Ex Libris Bookplate',
    category: 'postage',
    description: 'Antique library bookplate with tree of life',
    render: ExLibrisBookplate,
  },
  {
    id: 'stamp-botanical',
    name: 'Botanique 15¢ Stamp',
    category: 'postage',
    description: 'Perforated postage stamp with flower drawing',
    render: BotanicalPostageStamp,
  },
  {
    id: 'stamp-airmail',
    name: 'Air Mail Registered',
    category: 'postage',
    description: 'Official postal envelope label',
    render: AirmailStamp,
  },
  {
    id: 'postmark-cancellation',
    name: 'Postmark Cancellation',
    category: 'postage',
    description: 'Circular cancellation rubber mark in red ink',
    render: PostalCancellationMark,
  },
  {
    id: 'wax-seal-crimson',
    name: 'Crimson Wax Seal',
    category: 'postage',
    description: 'Imperial crimson red sealing wax with monogram',
    render: CrimsonWaxSeal,
  },
  {
    id: 'wax-seal-gold',
    name: 'Antique Gold Wax Seal',
    category: 'postage',
    description: 'Burnished brass wax seal with embossed star',
    render: GoldWaxSeal,
  },

  // 4. Pressed Botanicals
  {
    id: 'botanical-lavender',
    name: 'Pressed French Lavender',
    category: 'botanical',
    description: 'Dried violet lavender floral sprig',
    render: PressedLavenderSprig,
  },
  {
    id: 'botanical-fern',
    name: 'Pressed Woodland Fern',
    category: 'botanical',
    description: 'Dried evergreen forest fern frond',
    render: PressedWoodlandFern,
  },
  {
    id: 'botanical-daisy',
    name: 'Dried Chamomile Daisy',
    category: 'botanical',
    description: 'Pressed white meadow blossom',
    render: DriedChamomileDaisy,
  },
  {
    id: 'botanical-ginkgo',
    name: 'Pressed Ginkgo Leaf',
    category: 'botanical',
    description: 'Golden autumn fan leaf',
    render: PressedGinkgoLeaf,
  },

  // 5. Craft & Vintage Artifacts
  {
    id: 'brass-skeleton-key',
    name: 'Victorian Skeleton Key',
    category: 'craft',
    description: 'Antique brass ornamental key with hollow barrel',
    render: BrassSkeletonKey,
  },
  {
    id: 'fountain-pen-nib',
    name: '14K Gold Fountain Nib',
    category: 'craft',
    description: 'Engraved calligraphy nib with breather hole',
    render: FountainPenNib,
  },
  {
    id: 'film-slide-frame',
    name: 'Kodachrome Film Slide',
    category: 'craft',
    description: '1968 35mm cardboard camera transparency mount',
    render: FilmSlideFrame,
  },
  {
    id: 'button-wood',
    name: 'Turned Wooden Button',
    category: 'craft',
    description: 'Vintage 4-hole button with cross stitching',
    render: VintageWoodButton,
  },
  {
    id: 'binder-clip-brass',
    name: 'Brass Wire Binder Clip',
    category: 'craft',
    description: 'Spring steel clip with antique brass loops',
    render: BrassBinderClip,
  },
  {
    id: 'washi-lace',
    name: 'Lace Washi Ribbon',
    category: 'craft',
    description: 'Translucent floral lace masking tape strip',
    render: LaceWashiTapeStrip,
  },
  {
    id: 'washi-kraft',
    name: 'Kraft Paper Tape',
    category: 'craft',
    description: 'Torn brown kraft parcel tape',
    render: KraftTapeStrip,
  },
];

export const getStickerRenderer = (type: string): React.FC<{ className?: string }> => {
  const found = STICKER_CATALOG.find((s) => s.id === type);
  return found ? found.render : QuoteWanderSlip;
};
