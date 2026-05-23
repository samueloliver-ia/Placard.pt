"use client";

import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";

const featuredMatches = [
  {
    id: 1,
    league: "Champions League",
    teamHome: "Real Madrid",
    teamAway: "Manchester City",
    score: "0 - 0",
    time: "22'",
    odds: { home: "2.85", draw: "3.40", away: "2.45" },
    signal: "Vitória Casa",
  },
  {
    id: 2,
    league: "Premier League",
    teamHome: "Arsenal",
    teamAway: "Liverpool",
    score: "1 - 0",
    time: "45'",
    odds: { home: "1.95", draw: "3.60", away: "3.80" },
    signal: "Mais de 2.5 Gols",
  },
  {
    id: 3,
    league: "NBA",
    teamHome: "Lakers",
    teamAway: "Warriors",
    score: "Pre-match",
    time: "23:30",
    odds: { home: "1.80", draw: "-", away: "2.05" },
    signal: "Handicap Lakers -2.5",
  },
  {
    id: 4,
    league: "Brasileirão",
    teamHome: "Flamengo",
    teamAway: "Palmeiras",
    score: "0 - 0",
    time: "Hoje",
    odds: { home: "2.10", draw: "3.20", away: "3.60" },
    signal: "Ambas Marcam",
  }
];

export function FeaturedGames() {
  return (
    <section className="py-12 bg-dark-bg border-b border-dark-border relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center gap-2 mb-8">
          <Flame className="w-5 h-5 text-neon-green" />
          <h2 className="text-xl md:text-2xl font-bold text-white">Jogos em Destaque</h2>
          <span className="px-2 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-md ml-2 border border-neon-green/20">
            SINAIS ATIVOS
          </span>
        </div>

        {/* Scrollable Container for Mobile / Grid for Desktop */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-4 snap-x">
          
          {featuredMatches.map((match, idx) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[280px] w-[85%] md:w-auto snap-center shrink-0 glass-card p-5 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-colors group cursor-pointer relative"
            >
              {/* Highlight Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-neon-green/0 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="flex justify-between items-center mb-4 text-xs font-semibold text-gray-400">
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-neon-cyan" />
                  <span>{match.league}</span>
                </div>
                <span className={match.time.includes("'") ? "text-neon-green animate-pulse" : ""}>
                  {match.time}
                </span>
              </div>

              <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="font-bold text-white truncate">{match.teamHome}</div>
                  <div className="font-bold text-white truncate">{match.teamAway}</div>
                </div>
                <div className="text-xl font-black text-white bg-dark-bg px-3 py-1 rounded-lg border border-white/10">
                  {match.score}
                </div>
              </div>

              {/* Odds */}
              <div className="flex gap-2 mb-4">
                <div className="flex-1 bg-dark-bg border border-white/5 rounded-md p-2 flex flex-col items-center hover:bg-neon-green/10 transition-colors">
                  <span className="text-[10px] text-gray-500">1</span>
                  <span className="font-mono text-sm text-neon-green font-bold">{match.odds.home}</span>
                </div>
                <div className="flex-1 bg-dark-bg border border-white/5 rounded-md p-2 flex flex-col items-center hover:bg-neon-green/10 transition-colors">
                  <span className="text-[10px] text-gray-500">X</span>
                  <span className="font-mono text-sm text-gray-300 font-bold">{match.odds.draw}</span>
                </div>
                <div className="flex-1 bg-dark-bg border border-white/5 rounded-md p-2 flex flex-col items-center hover:bg-neon-green/10 transition-colors">
                  <span className="text-[10px] text-gray-500">2</span>
                  <span className="font-mono text-sm text-neon-green font-bold">{match.odds.away}</span>
                </div>
              </div>

              {/* AI Signal */}
              <div className="w-full bg-neon-green/10 border border-neon-green/20 rounded-lg p-2 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                <span className="text-xs font-bold text-neon-green uppercase tracking-wider">
                  Sinal IA: {match.signal}
                </span>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
