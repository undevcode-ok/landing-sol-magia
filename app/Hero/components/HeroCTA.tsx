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
        className="bg-[#c0392b] hover:bg-[#96281b] text-white text-2xl font-semibold px-12 py-3 rounded-full transition-colors duration-200 no-underline tracking-wide"
      >
        {heroData.cta.label}
      </a>
      
    </div>
  );
};