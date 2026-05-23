"use client";

import { Download } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex justify-center items-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-neon-green/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-neon-green/40">
          <span className="text-neon-green font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Vagas Limitadas Para Novos Usuários
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 max-w-3xl leading-tight">
          Não deixe a próxima <span className="text-gradient">oportunidade</span> passar em branco.
        </h2>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl">
          Faça o download gratuito agora mesmo e junte-se aos profissionais que lucram todos os dias usando inteligência artificial.
        </p>

        <a 
          href="#"
          className="group relative flex items-center justify-center gap-3 bg-neon-green text-dark-bg px-10 py-5 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 animate-glow shadow-[0_0_40px_rgba(0,255,163,0.4)]"
        >
          <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Download className="w-8 h-8" />
          <span>BAIXAR APP AGORA</span>
        </a>

        <div className="mt-8 text-gray-500 text-sm flex items-center gap-4">
          <span>✔️ Download 100% Seguro</span>
          <span>•</span>
          <span>✔️ Versão mais recente (v2.4.1)</span>
        </div>
      </div>
    </section>
  );
}
