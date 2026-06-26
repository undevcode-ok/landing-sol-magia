import { logoData } from "../data/navbar.data";

interface NavbarLogoProps {
  isLight: boolean;
}

export const NavbarLogo = ({ isLight }: NavbarLogoProps) => {
  return (
    <a href="#hero" className="flex flex-col leading-tight no-underline">
      <span
        className={`text-2xl font-bold uppercase tracking-widest transition-colors duration-300 ${
          isLight ? "text-[#1a0a0a]" : "text-white"
        }`}
      >
        {logoData.title}
      </span>
      <span
        className={`text-[13px] font-normal tracking-wide transition-colors duration-300 ${
          isLight ? "text-[#1a0a0a]/70" : "text-white/80"
        }`}
      >
        {logoData.subtitle}
      </span>
    </a>
  );
};