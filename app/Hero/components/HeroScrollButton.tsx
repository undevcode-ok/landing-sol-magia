"use client";

import { useHeroScroll } from "../hooks/useHeroScroll";

export const HeroScrollButton = () => {
  const { handleScroll } = useHeroScroll();

  return (
    <button
      onClick={handleScroll}
      aria-label="Ir a la siguiente sección"
      className="w-9 h-9 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white transition-colors hover:bg-white/20"
      style={{ animation: "heroFadeUp 0.8s ease 1.1s forwards", opacity: 0 }}
    >
      {/* SVG chevron down — sin lucide */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
};