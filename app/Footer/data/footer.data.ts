import { siMercadopago, siWesternunion } from "simple-icons";
import { FooterData } from "../types/footer.types";

export const footerData: FooterData = {
  brand: {
    logoImage: "/img/logo/marca.webp",
    alt: "Sol Kees",
    subtitle: "LLave Mágica",
    description:
      "Lic. en Psicología Holística, Videncias Grafológicas. Reconectando con tu Consciencia de Ser, el éxito de una vida y el método.",
  },
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Aclaraciones", href: "#urgency" },
    { label: "Referencias", href: "#references" },
  ],
  socialLinks: [
    { id: 1, label: "Instagram", href: "https://www.instagram.com/solkeesok/", icon: "instagram" },
  ],
  phoneNumbers: ["(011) 7894-5333", "(2944) 348887"],
  paymentMethods: [
    {
      id: 1,
      name: "Mercado Pago",
      iconPath: siMercadopago.path,
      iconColor: `#${siMercadopago.hex}`,
    },
    {
      id: 2,
      name: "Western Union",
      iconPath: siWesternunion.path,
      iconColor: `#${siWesternunion.hex}`,
    },
    {
      id: 3,
      name: "Prex",
      // Prex no está en simple-icons; se usa el favicon público del sitio oficial.
      logo: "https://icons.duckduckgo.com/ip3/prexcard.com.ar.ico",
    },
  ],
  copyright: "Sol Kees",
  madeWith: "Hecho con ♥ por el equipo de Undevcode",
  // TODO: reemplazar por la URL real del sitio de Undevcode.
  madeWithLink: "https://undevcode.com",
};