"use client";
import Image from "next/image";
import { ChevronRight, Trophy } from "lucide-react";

const topLeagues = [
  { id: "champions", title: "Liga dos Campeões", sport: "Futebol", img: "/champions.png", tag: "TOP" },
  { id: "nba", title: "NBA", sport: "Basquetebol", img: "/nba.png", tag: "HOT" },
  { id: "ufc", title: "UFC", sport: "MMA", img: "/ufc.png", tag: "EM DIRETO" },
  { id: "brasileirao", title: "Brasileirão", sport: "Futebol", img: "/brasileirao.png", tag: "TOP" }
];

export function TopLeagues() {
  const handleFakeClick = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leagues" className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-neon-green rounded-full"></div>
          <h3 className="text-lg font-black italic tracking-tight text-white uppercase flex items-center gap-2">
            Ligas em Destaque <Trophy className="w-4 h-4 text-neon-green" />
          </h3>
        </div>
        <button className="text-gray-400 text-xs font-bold flex items-center hover:text-neon-green transition-colors">
          MAIS <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {topLeagues.map((league) => (
          <button 
            key={league.id} 
            onClick={handleFakeClick}
            className="group relative flex flex-col items-start bg-[#1A1A1A] border border-white/5 rounded-xl p-2 transition-transform hover:scale-[1.02]"
          >
            {/* Tag (TOP/HOT) */}
            <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg">
              {league.tag}
            </div>

            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 shadow-inner bg-[#242424]">
              <Image 
                src={league.img} 
                alt={league.title}
                fill
                className="object-cover group-hover:scale-110 group-hover:opacity-90 transition-all duration-500"
              />
            </div>
            <div className="px-1 text-left w-full">
              <div className="text-xs font-bold text-white truncate">{league.title}</div>
              <div className="text-[10px] text-gray-500">{league.sport}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
