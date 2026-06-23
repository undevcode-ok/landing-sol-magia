import { heroData } from "../data/hero.data";

export const HeroDescription = () => {
  return (
    <p className="text-[#ccc] text-lg leading-[1.75] max-w-[580px] mx-auto mb-8">
      {heroData.description}
    </p>
  );
};