import Link from "next/link";
import { Download, Menu, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side: Menu + Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button className="p-1 text-gray-400 hover:text-white shrink-0" aria-label="Menu">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <img src="/new_Placard_pt.svg" alt="Placard.pt" className="h-6 sm:h-8 w-auto" />
          </Link>
        </div>

        {/* Right Side: Search + CTA */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="gtranslate_wrapper shrink-0 relative z-[9999]"></div>
          <button className="p-1 text-gray-400 hover:text-white shrink-0" aria-label="Pesquisar">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <Link
            href="/download"
            className="flex items-center gap-1 bg-neon-green text-[#121212] px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-md font-bold text-[10px] sm:text-sm shadow-[0_0_15px_rgba(0,255,163,0.3)] hover:shadow-[0_0_20px_rgba(0,255,163,0.6)] transition-all animate-pulse-slow shrink-0 whitespace-nowrap"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">BAIXAR APP</span>
            <span className="sm:hidden">APP</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
