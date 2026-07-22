import { heroData } from "../data/hero.data";

export const HeroTagline = () => {
  return (
    <p className="font-secondary text-[#ccc] text-base sm:text-lg lg:text-xl xl:text-2xl tracking-widest mb-6">
      {heroData.tagline}
    </p>
  );
};