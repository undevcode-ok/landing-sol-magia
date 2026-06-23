import { NavLink, LogoData, CTAData } from "../types/navbar.types";

export const logoData: LogoData = {
  title: "Flama Ancestral",
  subtitle: "Rituales & Hechizos",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Referencias", href: "/referencias" },
  { label: "Aclaraciones", href: "/aclaraciones" },
];

export const ctaData: CTAData = {
  label: "Comunicarse",
  href: "https://wa.me/TUNUMERO",
  ariaLabel: "Contactar por WhatsApp",
};