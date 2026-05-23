"use client";

import { motion } from "framer-motion";
import { Download, Star, TrendingUp, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-neon-green/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm font-medium text-neon-green">O Aplicativo #1 de Performance Esportiva</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Transforme informação <br className="hidden md:block" />
            esportiva em <br className="hidden md:block" />
            <span className="text-gradient">Oportunidades Reais.</span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-lg">
            Sinais precisos, análises em tempo real e notificações instantâneas na palma da sua mão. Exclusivo para Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="#"
              className="group relative flex items-center justify-center w-full sm:w-auto gap-3 bg-neon-green text-dark-bg px-6 py-4 md:px-8 font-bold text-base md:text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 animate-glow"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Download className="w-6 h-6" />
              <span>BAIXAR APP AGORA</span>
            </a>
            
            <div className="flex flex-col justify-center items-center lg:items-start gap-1">
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-neon-green text-neon-green" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Junte-se a +10.000 usuários lucrando</span>
            </div>
          </div>
        </motion.div>

        {/* Mockup Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center animate-[float_6s_ease-in-out_infinite]"
        >
          {/* Main Phone Mockup */}
          <div className="relative w-[280px] md:w-[300px] h-[560px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-dark-card glass-card p-4 overflow-hidden z-20 flex flex-col gap-4 shadow-[0_0_50px_rgba(0,255,163,0.15)]">
            {/* Fake App Interface */}
            <div className="w-full h-12 bg-dark-bg rounded-xl flex items-center justify-between px-4">
              <div className="font-bold text-neon-green">Placard.pt</div>
              <Zap className="w-5 h-5 text-neon-green" />
            </div>
            
            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full h-32 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-xl border border-neon-green/20 flex flex-col justify-end p-4">
                <span className="text-xs text-gray-400">Sinal Forte Identificado</span>
                <span className="text-xl font-bold text-white">Vitória do Time A</span>
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1 h-16 bg-dark-bg rounded-lg border border-dark-border flex items-center justify-center">
                  <span className="text-neon-cyan font-mono">1.85</span>
                </div>
                <div className="flex-1 h-16 bg-dark-bg rounded-lg border border-dark-border flex items-center justify-center">
                  <span className="text-gray-400 font-mono">3.40</span>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="w-full h-24 mt-2 border-b border-neon-green/30 flex items-end justify-between px-2 pb-2">
                {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                  <div key={i} className="w-4 bg-neon-green/50 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Elements Behind */}
          <div className="hidden md:flex absolute -right-8 top-1/4 w-48 h-16 glass-card rounded-xl z-30 items-center px-4 gap-3 border border-neon-cyan/30 animate-[float_4s_ease-in-out_infinite_reverse]">
            <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-neon-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Lucro Diário</span>
              <span className="text-sm font-bold text-white">+ 450.00 R$</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
