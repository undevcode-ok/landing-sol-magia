import { heroData } from "../data/hero.data";

export const HeroTagline = () => {
  return (
    <p
      className="text-4xl sm:text-2xl  text-white/70 uppercase mb-4"
      style={{ animation: "heroFadeUp 0.8s ease 0.3s forwards", opacity: 0 }}
    >
      {heroData.tagline}
    </p>
  );
};