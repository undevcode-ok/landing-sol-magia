"use client";

import { useHeroScroll } from "../hooks/useHeroScroll";
import { ChevronDown } from "lucide-react";

export const HeroScrollButton = () => {
  const { handleScroll } = useHeroScroll();

  return (
    <button
      onClick={handleScroll}
      aria-label="Ir a la siguiente sección"
      className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] lg:w-[38px] lg:h-[38px] rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white text-base transition-colors hover:bg-white/20"
    >
      <ChevronDown size={18} />
    </button>
  );
};