"use client";
import { ChevronRight } from "lucide-react";

// Soccer ball icon SVG
const SoccerBallIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12l3.5 2m-7 0l3.5-2m0 0V8.5m3.5 3.5l2-3.5m-9 3.5l-2-3.5m7.5-1.5l-3.5-2m0 0l-3.5 2" />
  </svg>
);

const matches = [
  {
    id: 1,
    league: "Taça Libertadores",
    time: "2° P | 83:18",
    home: "Peñarol",
    away: "Corinthians SP",
    scoreHome: 1,
    scoreAway: 1,
    odds: { home: "6.25", draw: "1.30", away: "3.70" }
  },
  {
    id: 2,
    league: "Taça Libertadores",
    time: "2° P | 82:21",
    home: "Universidad Católica",
    away: "Barcelona SC",
    scoreHome: 1,
    scoreAway: 0,
    odds: { home: "1.02", draw: "11.00", away: "200.00" }
  },
  {
    id: 3,
    league: "Brasileirão Série A",
    time: "1° P | 34:12",
    home: "Flamengo",
    away: "Palmeiras",
    scoreHome: 0,
    scoreAway: 0,
    odds: { home: "2.10", draw: "3.25", away: "3.10" }
  },
  {
    id: 4,
    league: "Champions League",
    time: "2° P | 65:40",
    home: "Real Madrid",
    away: "Man City",
    scoreHome: 2,
    scoreAway: 1,
    odds: { home: "1.85", draw: "2.90", away: "4.50" }
  },
  {
    id: 5,
    league: "NBA",
    time: "4° Q | 05:12",
    home: "Lakers",
    away: "Warriors",
    scoreHome: 102,
    scoreAway: 98,
    odds: { home: "1.40", draw: "15.00", away: "2.85" }
  }
];

export function LiveSportsBets() {
  const handleFakeClick = () => {
    // Scroll smoothly to download section
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sports" className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-neon-green rounded-full"></div>
          <h3 className="text-lg font-black italic tracking-tight text-white uppercase">
            Em Direto Agora
          </h3>
        </div>
        <button onClick={handleFakeClick} className="text-gray-400 text-xs font-bold flex items-center hover:text-neon-green transition-colors">
          VER TODOS <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-3 snap-x snap-mandatory pb-2 -mx-4 px-4">
        {matches.map((match) => (
          <div key={match.id} className="relative overflow-hidden snap-center bg-[#1f2129] border border-white/5 rounded-xl p-3 shadow-lg min-w-[280px] w-[85vw] max-w-[320px]">
            {/* Watermark Football */}
            <div className="absolute -right-6 top-10 opacity-[0.03] pointer-events-none">
               <SoccerBallIcon className="w-32 h-32" />
            </div>

            {/* Header: League & Time */}
            <div className="relative z-10 flex justify-between items-center mb-3 text-[11px] font-bold">
              <div className="flex items-center gap-1.5 text-gray-300">
                <SoccerBallIcon className="w-3.5 h-3.5" />
                <span>{match.league}</span>
              </div>
              <span className="text-neon-green">{match.time}</span>
            </div>

            {/* Teams & Score */}
            <div className="relative z-10 flex justify-between items-center mb-2">
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="text-[15px] font-bold text-white leading-tight">{match.home}</div>
                <div className="text-[15px] font-bold text-white leading-tight">{match.away}</div>
              </div>
              <div className="flex flex-col gap-1.5 items-end px-2">
                <div className="text-[15px] font-black text-neon-green">{match.scoreHome}</div>
                <div className="text-[15px] font-black text-neon-green">{match.scoreAway}</div>
              </div>
            </div>

            {/* Resultado Final Badge */}
            <div className="relative z-10 mb-3">
              <span className="inline-block px-2.5 py-0.5 border border-neon-green/40 text-neon-green text-[10px] font-bold rounded-full bg-neon-green/5">
                Resultado final
              </span>
            </div>

            {/* Odds Buttons */}
            <div className="relative z-10 grid grid-cols-3 gap-2">
              <button onClick={handleFakeClick} className="flex flex-col items-center bg-[#f0f1f5] hover:bg-white rounded-lg py-1 transition-colors">
                <span className="text-[10px] text-gray-600 font-bold">1</span>
                <span className="text-sm font-black text-gray-900">{match.odds.home}</span>
              </button>
              <button onClick={handleFakeClick} className="flex flex-col items-center bg-[#f0f1f5] hover:bg-white rounded-lg py-1 transition-colors">
                <span className="text-[10px] text-gray-600 font-bold">X</span>
                <span className="text-sm font-black text-gray-900">{match.odds.draw}</span>
              </button>
              <button onClick={handleFakeClick} className="flex flex-col items-center bg-[#f0f1f5] hover:bg-white rounded-lg py-1 transition-colors">
                <span className="text-[10px] text-gray-600 font-bold">2</span>
                <span className="text-sm font-black text-gray-900">{match.odds.away}</span>
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
