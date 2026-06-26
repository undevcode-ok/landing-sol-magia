import { NavLink, LogoData, CTAData } from "../types/navbar.types";

export const logoData: LogoData = {
  title: "Flama Ancestral",
  subtitle: "Rituales & Hechizos",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero", hasDropdown: false },
  { label: "Servicios", href: "#services", hasDropdown: false },
  { label: "Aclaraciones", href: "#urgency", hasDropdown: false },
  { label: "Referencias", href: "#references", hasDropdown: false },
];

export const ctaData: CTAData = {
  label: "Comunicarse",
  href: "https://wa.me/TUNUMERO",
  ariaLabel: "Contactar por WhatsApp",
};