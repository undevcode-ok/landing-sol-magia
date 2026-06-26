import { ctaData } from "../data/navbar.data";

export const NavbarCTA = () => {
  return (
    <a
      href={ctaData.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ctaData.ariaLabel}
      className="hidden lg:block bg-[#c0392b] hover:bg-[#96281b] text-white text-lg font-semibold px-7 py-[11px] rounded-full whitespace-nowrap transition-colors duration-200 no-underline tracking-wide"
    >
      {ctaData.label}
    </a>
  );
};