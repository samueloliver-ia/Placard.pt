import { Download, Smartphone, CheckCircle2, ShieldCheck, Timer, Flame } from "lucide-react";
import Link from "next/link";

export function AppDownloadCTA() {
  return (
    <section id="download" className="px-4 py-8 mt-4 bg-gradient-to-b from-[#1A1A1A] to-[#121212] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 blur-[50px] rounded-full pointer-events-none"></div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-16 h-16 bg-[#242424] rounded-2xl flex items-center justify-center mb-4 border border-white/10 shadow-[0_0_30px_rgba(0,255,163,0.15)]">
          <Smartphone className="w-8 h-8 text-neon-green" />
        </div>
        
        <h2 className="text-2xl font-black italic tracking-tight text-white mb-2">
          JOGUE COM CONFIANÇA NA APP
        </h2>
        <p className="text-sm text-gray-400 mb-6 max-w-[280px]">
          Descarregue o Placard.pt oficial e aceda às melhores odds dos principais desportos diretamente do seu telemóvel.
        </p>

        <div className="flex flex-col gap-3 w-full mb-6 text-left">
          <div className="flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-xl border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
            <span className="text-sm font-medium text-gray-200">Mais rápido e seguro</span>
          </div>
          <div className="flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-xl border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
            <span className="text-sm font-medium text-gray-200">Notificações exclusivas de bónus</span>
          </div>
          <div className="flex items-center gap-3 bg-[#1A1A1A] p-3 rounded-xl border border-white/5">
            <ShieldCheck className="w-5 h-5 text-neon-green flex-shrink-0" />
            <span className="text-sm font-medium text-gray-200">Levantamentos e depósitos na hora</span>
          </div>
        </div>

        {/* Scarcity Bonus Alert */}
        <div className="w-full bg-red-950/20 border border-red-500/30 rounded-xl p-3 mb-6 flex items-start gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.1)]">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500 animate-pulse"></div>
          <div className="text-red-500 mt-0.5 animate-pulse shrink-0">
            <Timer className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-red-500 font-black text-[11px] uppercase tracking-wide mb-0.5 flex items-center gap-1">
              <Flame className="w-3 h-3" /> Atenção: Oferta Limitada
            </p>
            <p className="text-gray-300 text-[13px] leading-snug">
              Descarregue agora e <strong className="text-white">ganhe um bónus de 60,00€</strong> no seu primeiro acesso! 
              <span className="block mt-1 text-red-400 text-[11px] font-bold">⚠️ Restam apenas 7 bónus hoje.</span>
            </p>
          </div>
        </div>

        <Link href="/download" className="w-full flex items-center justify-center gap-2 bg-neon-green text-[#121212] py-4 rounded-xl font-black text-lg uppercase tracking-wide shadow-[0_4px_25px_rgba(0,255,163,0.4)] hover:scale-[1.02] transition-transform animate-pulse">
          <Download className="w-6 h-6" />
          Descarregar Placard.pt APK
        </Link>
        <p className="text-[10px] text-gray-500 mt-4 text-center max-w-[250px]">
          Exclusivo para Android. Ao descarregar concorda com os nossos Termos de Serviço e Política de Privacidade.
        </p>
      </div>
    </section>
  );
}
