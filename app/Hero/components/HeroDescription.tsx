import { heroData } from "../data/hero.data";

export const HeroDescription = () => {
  return (
    <p className="font-bold text-[#ccc] text-lg sm:text-xl lg:text-2xl xl:text-2xl leading-[1.40] max-w-[580px] mx-auto mb-8">
      {heroData.description}
    </p>
  );
};