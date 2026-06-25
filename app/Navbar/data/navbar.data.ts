import { NavLink, LogoData, CTAData } from "../types/navbar.types";

export const logoData: LogoData = {
  title: "Flama Ancestral",
  subtitle: "Rituales & Hechizos",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Aclaraciones", href: "#urgency" },
  { label: "Referencias", href: "#references" },
];

export const ctaData: CTAData = {
  label: "Comunicarse",
  href: "https://wa.me/TUNUMERO",
  ariaLabel: "Contactar por WhatsApp",
};