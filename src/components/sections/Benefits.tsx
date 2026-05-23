"use client";

import { motion } from "framer-motion";
import { Activity, BellRing, BrainCircuit, FastForward, Smartphone, Target } from "lucide-react";

const benefits = [
  {
    icon: <Activity className="w-6 h-6 text-neon-green" />,
    title: "Sinais Ao Vivo",
    description: "Identificamos padrões vencedores em frações de segundos enquanto a partida acontece."
  },
  {
    icon: <FastForward className="w-6 h-6 text-neon-cyan" />,
    title: "Velocidade Absoluta",
    description: "Nossa infraestrutura garante que você receba a oportunidade antes que as odds mudem."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-neon-green" />,
    title: "IA Preditiva",
    description: "Estratégias atualizadas 24 horas por dia com base em milhares de jogos históricos."
  },
  {
    icon: <BellRing className="w-6 h-6 text-neon-cyan" />,
    title: "Notificações Instantâneas",
    description: "Seja avisado no exato momento. Sem atrasos, sem complicação."
  },
  {
    icon: <Target className="w-6 h-6 text-neon-green" />,
    title: "Oportunidades Filtradas",
    description: "Esqueça análises complexas. Entregamos a informação mastigada e pronta para uso."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-neon-cyan" />,
    title: "Interface Intuitiva",
    description: "Design limpo, sem poluição visual. Focado 100% na sua performance e resultados."
  }
];

export function Benefits() {
  return (
    <section className="py-24 relative">
      {/* Background glow lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-green to-transparent absolute left-1/4" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent absolute right-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A vantagem injusta para os seus <span className="text-gradient">resultados</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Nós combinamos tecnologia de ponta com usabilidade incrível para colocar as melhores oportunidades direto no seu celular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-neon-green/10 transition-colors duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
