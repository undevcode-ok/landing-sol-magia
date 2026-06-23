import { ctaData } from "../data/navbar.data";

export const NavbarCTA = () => {
  return (
    <a
      href={ctaData.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ctaData.ariaLabel}
      className="bg-[#f06060] hover:bg-[#d94f4f] text-white text-sm font-medium px-7 py-[11px] rounded-full whitespace-nowrap transition-colors duration-200 no-underline"
    >
      {ctaData.label}
    </a>
  );
};