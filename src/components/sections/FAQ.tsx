"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como instalo o aplicativo no meu Android?",
    a: "A instalação é muito simples. Ao clicar em 'Baixar App', o arquivo APK será baixado. Basta abrir o arquivo e autorizar a instalação. Fornecemos um tutorial em vídeo rápido na próxima tela caso você tenha dúvidas."
  },
  {
    q: "O aplicativo é seguro?",
    a: "Totalmente. O Placard.pt utiliza os mesmos protocolos de segurança de aplicativos bancários. Somos verificados livre de vírus e malwares por diversas plataformas de segurança."
  },
  {
    q: "Em quanto tempo recebo os sinais?",
    a: "Em tempo real. Nossa inteligência artificial analisa os jogos 24 horas por dia e dispara a notificação no exato segundo em que uma oportunidade de alto nível é identificada."
  },
  {
    q: "Funciona em iOS (iPhone)?",
    a: "No momento, o Placard.pt é um aplicativo Premium Exclusivo para Android, focado em entregar a melhor performance nativa para este sistema operacional."
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não! A interface foi desenhada justamente para entregar a informação mastigada. Você recebe o sinal, vê a probabilidade de acerto e decide se quer seguir a oportunidade."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark-card/30 border-t border-dark-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ainda com <span className="text-gradient">dúvidas?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tudo que você precisa saber antes de fazer o download.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg text-white">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-neon-green transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
