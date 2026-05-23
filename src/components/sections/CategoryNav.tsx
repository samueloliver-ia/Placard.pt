"use client";
import { useState } from "react";
import { Trophy, Activity, Target, Swords, Gamepad2 } from "lucide-react";

const categories = [
  { id: "futebol", label: "Futebol", icon: Trophy },
  { id: "basquete", label: "Basquete", icon: Target },
  { id: "tenis", label: "Tênis", icon: Activity },
  { id: "esports", label: "E-Sports", icon: Gamepad2 },
  { id: "mma", label: "MMA", icon: Swords },
];

export function CategoryNav() {
  const [active, setActive] = useState("futebol");

  return (
    <div className="w-full bg-[#1A1A1A] border-b border-white/5 py-3">
      <div className="flex items-center gap-3 overflow-x-auto px-4 hide-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                isActive 
                  ? "bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_10px_rgba(0,255,163,0.2)]" 
                  : "bg-dark-bg border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-bold">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
