"use client";


export function BannersCarousel({ imageSrc = "/Banner 1.png" }: { imageSrc?: string }) {
  return (
    <section className="w-full py-4 px-4 overflow-hidden">
      <div className="relative w-full rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group">
        <img 
          src={imageSrc} 
          alt="Banner" 
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-3">
        <div className="w-6 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_rgba(0,255,163,0.5)]"></div>
        <div className="w-2 h-1.5 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-1.5 bg-gray-600 rounded-full"></div>
      </div>
    </section>
  );
}
