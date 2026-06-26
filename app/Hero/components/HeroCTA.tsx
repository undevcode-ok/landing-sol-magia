import { heroData } from "../data/hero.data";

export const HeroCTA = () => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
      style={{ animation: "heroFadeUp 0.8s ease 0.9s forwards", opacity: 0 }}
    >
      <a
        href={heroData.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#c0392b] hover:bg-[#96281b] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 no-underline tracking-wide"
      >
        {heroData.cta.label}
      </a>
      <a
        href="#services"
        className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200 no-underline"
      >
        Ver Servicios ↓
      </a>
    </div>
  );
};