import { heroData } from "../data/hero.data";

export const HeroDescription = () => {
  return (
    <p className="font-bold text-[#ccc] text-2xl leading-[1.40] max-w-[580px] mx-auto mb-8">
      {heroData.description}
    </p>
  );
};