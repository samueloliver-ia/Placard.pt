import { Download, Gift, Zap, Bell, ShieldCheck, Folder, Settings, Smartphone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center pt-8 pb-20 px-4 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-green/10 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        <h1 className="text-[28px] leading-[1.1] font-black text-center mb-3 uppercase italic tracking-tight">
          DESCARREGUE A APP PLACARD.PT<br />
          E GANHE <span className="text-neon-green">BÔNUS!</span>
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Ofertas exclusivas, odds aumentadas e muito mais vantagens para você.
        </p>

        {/* Mockup App Image */}
        <div className="w-full flex justify-center mb-8 relative -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full">
          <div className="absolute inset-0 bg-neon-green/20 blur-[70px] rounded-full scale-90"></div>
          <Image 
            src="/mockup app.png" 
            alt="App Placard.pt Mockup" 
            width={800} 
            height={450} 
            className="w-full h-auto object-contain relative z-10 scale-110 sm:scale-100"
            priority
          />
        </div>

        {/* 4 Cards de Vantagens */}
        <div className="grid grid-cols-4 gap-2 w-full mb-8">
          <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg border border-neon-green/20 bg-neon-green/5">
            <Gift className="w-6 h-6 text-neon-green" />
            <span className="text-[9px] font-bold text-neon-green leading-tight">BÔNUS EXCLUSIVOS</span>
            <span className="text-[8px] text-gray-400">só na app</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg border border-white/5 bg-[#121212]">
            <Zap className="w-6 h-6 text-neon-green" />
            <span className="text-[9px] font-bold text-neon-green leading-tight">ODDS MAIORES</span>
            <span className="text-[8px] text-gray-400">lucre mais</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg border border-white/5 bg-[#121212]">
            <Bell className="w-6 h-6 text-neon-green" />
            <span className="text-[9px] font-bold text-neon-green leading-tight">NOTIFICAÇÕES RÁPIDAS</span>
            <span className="text-[8px] text-gray-400">em 1ª mão</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg border border-white/5 bg-[#121212]">
            <ShieldCheck className="w-6 h-6 text-neon-green" />
            <span className="text-[9px] font-bold text-neon-green leading-tight">SAQUE SEGURO E RÁPIDO</span>
            <span className="text-[8px] text-gray-400">seguro e confiável</span>
          </div>
        </div>

        {/* Main Download Button */}
        <a 
          href="/PlacardDesporto.apk"
          download="PlacardDesporto.apk"
          className="w-full flex items-center justify-center gap-2 bg-neon-green text-[#121212] py-4 rounded-xl font-black text-lg uppercase tracking-wide shadow-[0_0_25px_rgba(0,255,163,0.3)] hover:scale-[1.02] transition-transform animate-pulse"
        >
          <Download className="w-6 h-6" />
          DESCARREGUE A APP AGORA
        </a>
        <div className="flex items-center gap-1.5 mt-3 text-gray-400 text-xs">
          <ShieldCheck className="w-4 h-4 text-neon-green" />
          <span>Seguro, rápido e fácil.</span>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#0A0A0A] font-black italic tracking-wide text-lg text-white whitespace-nowrap text-center">
            GUIA DE INSTALAÇÃO
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full flex flex-col gap-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-dashed-border bg-neon-green/30 border-l-2 border-dotted border-neon-green/30"></div>

          {/* Step 1 */}
          <div className="flex gap-4 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#121212] border-2 border-neon-green flex items-center justify-center font-black text-xl text-neon-green">
                01
              </div>
              <div className="w-10 h-10 rounded-full border border-neon-green/50 flex items-center justify-center text-neon-green">
                <Download className="w-5 h-5" />
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-neon-green font-black text-lg tracking-tight uppercase mb-1">BAIXE O ARQUIVO</h3>
              <p className="text-sm text-gray-400 leading-snug">O ficheiro APK será salvo no seu dispositivo (normalmente na pasta Downloads).</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#121212] border-2 border-neon-green flex items-center justify-center font-black text-xl text-neon-green">
                02
              </div>
              <div className="w-10 h-10 rounded-full border border-neon-green/50 flex items-center justify-center text-neon-green">
                <Folder className="w-5 h-5" />
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-neon-green font-black text-lg tracking-tight uppercase mb-1">ABRA O ARQUIVO APK</h3>
              <p className="text-sm text-gray-400 leading-snug">Vá para a pasta de notificações ou transferências do seu telemóvel e toque no ficheiro descarregado.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#121212] border-2 border-neon-green flex items-center justify-center font-black text-xl text-neon-green">
                03
              </div>
              <div className="w-10 h-10 rounded-full border border-neon-green/50 flex items-center justify-center text-neon-green">
                <Settings className="w-5 h-5" />
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-neon-green font-black text-lg tracking-tight uppercase mb-1">PERMITIR FONTES DESCONHECIDAS</h3>
              <p className="text-sm text-gray-400 leading-snug">Se um aviso de segurança aparecer, vá em Configurações e permita a instalação de apps desta fonte.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#121212] border-2 border-neon-green flex items-center justify-center font-black text-xl text-neon-green">
                04
              </div>
              <div className="w-10 h-10 rounded-full border border-neon-green/50 flex items-center justify-center text-neon-green">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-neon-green font-black text-lg tracking-tight uppercase mb-1">INSTALE E ABRA A APLICAÇÃO</h3>
              <p className="text-sm text-gray-400 leading-snug">Toque em "Instalar", aguarde alguns segundos e abra a aplicação para começar a lucrar!</p>
            </div>
          </div>
        </div>

        {/* Pronto Box */}
        <div className="w-full mt-10 bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center shrink-0 p-1">
              <img src="/new_Placard_pt.svg" alt="Placard.pt" className="w-full h-auto" />
            </div>
            <div>
              <h4 className="text-white font-black text-lg tracking-tight">PRONTO! 🎉</h4>
              <p className="text-xs text-gray-400 leading-snug max-w-[180px]">Agora é só aproveitar as melhores <span className="text-neon-green font-bold">odds e apostas</span> na app.</p>
            </div>
          </div>
          <div className="bg-neon-green text-[#121212] px-3 py-2 rounded-lg font-black text-[10px] leading-tight text-center relative z-10 shadow-[0_0_15px_rgba(0,255,163,0.3)] border border-dashed border-[#121212]">
            BÔNUS EXCLUSIVOS<br/>
            ESPERAM POR VOCÊ!
          </div>
        </div>

        {/* Footer Badges */}
        <div className="grid grid-cols-2 gap-4 w-full mt-8 border-t border-white/5 pt-6">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-5 h-5 text-neon-green shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-white">COMPRA 100% SEGURA</div>
              <div className="text-[9px] text-gray-500">Seus dados protegidos</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-white">+ DE 500 MIL UTILIZADORES</div>
              <div className="text-[9px] text-gray-500">confiam no Placard.pt</div>
            </div>
          </div>
        </div>

        <Link href="/" className="mt-8 text-sm text-gray-400 font-medium flex items-center gap-2 hover:text-neon-green transition-colors">
          <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <ShieldCheck className="w-4 h-4 text-neon-green" />
          </span>
          Ainda com dúvidas? Voltar à Página Inicial
        </Link>
      </div>
    </main>
  );
}
