import { FooterData } from "../types/footer.types";

export const footerData: FooterData = {
  brand: {
    title: "Flama Ancestral",
    subtitle: "Rituales & Hechizos",
    description:
      "Atención a distancia en toda Argentina. Ciudad Autónoma de Buenos Aires, Palermo Hollywood.",
  },
  navLinks: [
    { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Aclaraciones", href: "#urgency" },
  { label: "Referencias", href: "#references" },

  ],
  socialLinks: [
    { id: 1, label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { id: 2, label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { id: 3, label: "WhatsApp", href: "https://wa.me/5491100000000", icon: "whatsapp" },
  ],
  paymentMethods: [
  {
    id: 1,
    name: "Visa",
    logo: "https://cdn.simpleicons.org/visa", // tu asset local
  },
  {
    id: 2,
    name: "Visa",
    logo: "https://cdn.simpleicons.org/visa",
  },
  {
    id: 3,
    name: "Mastercard",
    logo: "https://cdn.simpleicons.org/mastercard",
  },
  {
    id: 4,
    name: "Mastercard",
    logo: "https://cdn.simpleicons.org/mastercard",
  },
],
  copyright: "Flama Ancestral",
  madeWith: "Hecho con ♥ por el equipo de Undevcode",
};