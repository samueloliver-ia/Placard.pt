import { CategoryNav } from "@/components/sections/CategoryNav";
import { BannersCarousel } from "@/components/sections/BannersCarousel";
import { LiveSportsBets } from "@/components/sections/LiveSportsBets";
import { TopLeagues } from "@/components/sections/TopLeagues";
import { AppDownloadCTA } from "@/components/sections/AppDownloadCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <CategoryNav />
      <BannersCarousel />
      
      <div className="w-full h-[1px] bg-white/5 my-2"></div>
      
      <LiveSportsBets />
      
      <div className="w-full h-[1px] bg-white/5 my-2"></div>
      
      <BannersCarousel imageSrc="/Banner 2.png" />
      
      <TopLeagues />
      
      <AppDownloadCTA />
    </main>
  );
}
