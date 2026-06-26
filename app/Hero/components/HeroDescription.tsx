import { heroData } from "../data/hero.data";

export const HeroDescription = () => {
  return (
    <p
      className="text-white/75 text-base sm:text-lg leading-[1.75] max-w-[560px] mx-auto mb-10"
      style={{ animation: "heroFadeUp 0.8s ease 0.7s forwards", opacity: 0 }}
    >
      {heroData.description}
    </p>
  );
};