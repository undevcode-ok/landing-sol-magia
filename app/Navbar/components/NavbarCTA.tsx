import { ctaData } from "../data/navbar.data";

export const NavbarCTA = () => {
  return (
    <a
      href={ctaData.href}
      target="_blank"
      rel="noopener noreferrer"
      className="navbar-cta"
      aria-label={ctaData.ariaLabel}
    >
      {ctaData.label}
    </a>
  );
};