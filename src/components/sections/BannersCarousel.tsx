"use client";

import { useState, useEffect } from "react";

export function BannersCarousel({ images, imageSrc }: { images?: string[], imageSrc?: string }) {
  const banners = images || (imageSrc ? [imageSrc] : ["/Banner 1.png"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleBannerClick = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-4 px-4 overflow-hidden">
      <div 
        onClick={handleBannerClick}
        className="relative w-full rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer"
      >
        <img 
          src={banners[currentIndex]} 
          alt={`Banner ${currentIndex + 1}`} 
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? "w-6 bg-neon-green shadow-[0_0_5px_rgba(0,255,163,0.5)]" 
                : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
