import { heroData } from "../data/hero.data";

export const HeroTitle = () => {
  return (
    <h1
      className="text-white font-extrabold mb-12 uppercase leading-[1.1] tracking-wide "
      style={{ animation: "heroFadeUp 0.8s ease 0.5s forwards", opacity: 0 }}
    >
      {heroData.title.map((line, i) => (
        <span key={i} className="block text-8xl sm:text-6xl md:text-7xl">
          {line}
        </span>
      ))}
    </h1>
  );
};