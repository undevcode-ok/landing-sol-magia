import { heroData } from "../data/hero.data";

export const HeroTagline = () => {
  return (
    <p
      className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/70 uppercase mb-4"
      style={{ animation: "heroFadeUp 0.8s ease 0.3s forwards", opacity: 0 }}
    >
      {heroData.tagline}
    </p>
  );
};