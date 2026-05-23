"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCheck } from "lucide-react";

const messages = [
  { id: 1, name: "Lucas M.", time: "10:42", text: "O sinal bateu exato, obrigado!! 🚀" },
  { id: 2, name: "Thiago Silva", time: "11:15", text: "Já fiz minha meta da semana usando a IA de vocês." },
  { id: 3, name: "Marcos V.", time: "11:30", text: "Melhor app que já descarreguei. Simples e direto." },
  { id: 4, name: "João Pedro", time: "12:05", text: "Não acredito na velocidade das notificações. Top!" }
];

export function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A comunidade que não para de <span className="text-gradient">lucrar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Diariamente os nossos utilizadores transformam as notificações do Placard.pt em resultados expressivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-5 rounded-2xl flex flex-col gap-3 relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-neon-green" />
                  </div>
                  <span className="font-semibold text-sm">{msg.name}</span>
                </div>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-300">{msg.text}</p>
              <div className="flex justify-end">
                <CheckCheck className="w-4 h-4 text-neon-cyan" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center border-t border-dark-border pt-16">
          {[
            { value: "+10k", label: "Utilizadores Ativos" },
            { value: "98%", label: "Taxa de Acerto" },
            { value: "< 1s", label: "Velocidade do Sinal" },
            { value: "24/7", label: "Análise Constante" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-neon-green font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
