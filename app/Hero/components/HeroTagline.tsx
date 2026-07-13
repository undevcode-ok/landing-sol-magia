import { heroData } from "../data/hero.data";

export const HeroTagline = () => {
  return (
    <p className="font-secondary text-[#ccc] text-lg tracking-widest mb-6">
      {heroData.tagline}
    </p>
  );
};