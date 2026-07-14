import { FooterData } from "../types/footer.types";
import { buildWhatsAppUrl } from "@/app/Globals";

export const footerData: FooterData = {
  brand: {
    title: "Sol Kees",
    subtitle: "LLave Mágica",
    description:
      "Lic. en Psicología Holística Lic. en Psicología Holística, Videncias Grafológicas, Reconectando con tú Consciencia de Ser ,El éxito de una vida y El método",
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
  paymentMethods: [
  {
    id: 1,
    name: "Mercado Pago",
    logo: "https://cdn.simpleicons.org/mercadopago", // tu asset local
  },
  {
    id: 2,
    name: "Western Union",
    logo: "https://cdn.simpleicons.org/westernunion",
  },
  {
    id: 3,
    name: "Prex",
    logo: "https://cdn.simpleicons.org/prex",
  },
],
  copyright: "Sol Kees",
  madeWith: "Hecho con ♥ por el equipo de Undevcode",
};