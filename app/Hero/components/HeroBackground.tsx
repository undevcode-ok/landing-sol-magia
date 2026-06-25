import { heroData } from "../data/hero.data";

export const HeroBackground = () => {
  return (
    <>
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-top"
        style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
      />

      {/* Overlay oscuro general */}
      <div className="absolute inset-0 z-[1] bg-[rgba(8,3,3,0.62)]" />

      {/* Fade inferior — fusión con la sección siguiente */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2] bg-gradient-to-t from-[#111] to-transparent" />
    </>
  );
};