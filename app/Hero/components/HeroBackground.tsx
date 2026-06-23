import { heroData } from "../data/hero.data";

export const HeroBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-top"
        style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
      />
      <div className="absolute inset-0 z-[1] bg-[rgba(8,3,3,0.62)]" />
    </>
  );
};