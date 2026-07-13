import { heroData } from "../data/hero.data";

export const HeroTitle = () => {
  return (
    <h1 className="text-white text-8xl font-extrabold uppercase leading-[1.0] tracking-wide mb-7">
      {heroData.title.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
};