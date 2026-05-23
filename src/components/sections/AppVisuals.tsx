"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, BarChart3 } from "lucide-react";

export function AppVisuals() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Uma obra de arte em forma de <span className="text-gradient">aplicativo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Design premium pensado para máxima performance. Esqueça a bagunça dos sites tradicionais.
          </p>
        </div>

        <div className="relative h-[600px] flex justify-center items-center perspective-[2000px]">
          
          {/* Left App Screen */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 25, z: -200 }}
            whileInView={{ opacity: 1, x: -150, rotateY: 15, z: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute w-[280px] h-[550px] rounded-[2.5rem] glass-card border border-white/5 p-4 hidden lg:flex flex-col shadow-2xl opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-20 rounded-xl bg-dark-bg border border-white/5 p-4">
                <div className="w-1/2 h-3 bg-gray-700 rounded-full mb-2" />
                <div className="w-3/4 h-3 bg-gray-800 rounded-full" />
              </div>
              <div className="h-40 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/20 flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-neon-cyan/50" />
              </div>
              <div className="flex-1 rounded-xl bg-dark-bg border border-white/5" />
            </div>
          </motion.div>

          {/* Center App Screen (Main) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, z: 100 }}
            whileInView={{ opacity: 1, y: 0, z: 200 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute w-[280px] md:w-[320px] h-[560px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] glass border-[6px] md:border-[8px] border-dark-card p-4 flex flex-col shadow-[0_0_80px_rgba(0,255,163,0.15)] z-20 bg-dark-bg"
          >
            <div className="w-full h-12 flex items-center justify-between px-2 mb-4">
              <div className="font-bold text-lg text-white">Dashboard</div>
              <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-neon-green" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border border-neon-green/30 mb-4">
              <span className="text-xs text-gray-300">Retorno do Dia</span>
              <div className="text-2xl font-bold text-white mt-1">+ R$ 1.250,00</div>
              <div className="text-xs text-neon-green mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +15.4% hoje
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center">
                      <Zap className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Sinal VIP</div>
                      <div className="text-xs text-gray-400">Há 2 min</div>
                    </div>
                  </div>
                  <div className="text-neon-green font-mono font-bold">1.95</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right App Screen */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -25, z: -200 }}
            whileInView={{ opacity: 1, x: 150, rotateY: -15, z: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="absolute w-[280px] h-[550px] rounded-[2.5rem] glass-card border border-white/5 p-4 hidden lg:flex flex-col shadow-2xl opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-32 rounded-xl bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/20 flex flex-col p-4 justify-end">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-neon-green" />
                </div>
              </div>
              <div className="flex-1 flex gap-2">
                <div className="flex-1 rounded-xl bg-dark-bg border border-white/5" />
                <div className="flex-1 rounded-xl bg-dark-bg border border-white/5" />
              </div>
              <div className="h-24 rounded-xl bg-dark-bg border border-white/5" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
