"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, DownloadCloud } from "lucide-react";

export function Objections() {
  return (
    <section className="py-16 md:py-24 bg-dark-bg relative border-t border-dark-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Segurança e Confiabilidade de <span className="text-gradient">Nível Bancário</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Sabemos que segurança é sua prioridade. O Placard.pt foi desenvolvido seguindo os mais rigorosos padrões de proteção do Android.
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-neon-green" />, text: "Aplicativo 100% verificado e livre de malwares." },
                { icon: <Lock className="w-6 h-6 text-neon-cyan" />, text: "Seus dados estão protegidos com criptografia ponta a ponta." },
                { icon: <CheckCircle2 className="w-6 h-6 text-neon-green" />, text: "Instalação guiada e simples em menos de 1 minuto." },
                { icon: <DownloadCloud className="w-6 h-6 text-neon-cyan" />, text: "Atualizações contínuas de segurança." },
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Visual Security Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-neon-green/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-neon-green/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-neon-cyan/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border border-dashed border-neon-green/30 rounded-full animate-[spin_20s_linear_infinite]" />
              
              <div className="w-32 h-32 glass-card rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(0,255,163,0.2)]">
                <ShieldCheck className="w-16 h-16 text-neon-green" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
