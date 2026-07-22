import { ctaData } from "../data/navbar.data";
import { buildWhatsAppUrl } from "@/app/Globals";


export const NavbarCTA = () => {
  
  const wpUrl = buildWhatsAppUrl();
  return (
   <a
      href={wpUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ctaData.ariaLabel}
      className="font-secondary bg-[#581c87] hover:bg-[#3b0764] text-white text-sm sm:text-base lg:text-lg font-bold px-5 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-[11px] rounded-full whitespace-nowrap transition-colors duration-200 no-underline"
    >
      {ctaData.label}
    </a>
  );
};