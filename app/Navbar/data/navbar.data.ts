import { NavLink, LogoData, CTAData } from "../types/navbar.types";

export const logoData: LogoData = {
  logoImage: "/img/logo/marca.webp",
  alt: "Sol Kees",
};

export const navLinks: NavLink[] = [
  { label: "Servicios", href: "#services" },
  { label: "Aclaraciones", href: "#reed" },
  { label: "Referencias", href: "#references" },
];

export const ctaData: CTAData = {
  label: "Comunicarse",
  ariaLabel: "Contactar por WhatsApp",
};