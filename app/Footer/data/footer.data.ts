import { FooterData } from "../types/footer.types";

export const footerData: FooterData = {
  brand: {
    title: "Flama Ancestral",
    subtitle: "Rituales & Hechizos",
    description:
      "Atención a distancia en toda Argentina. Ciudad Autónoma de Buenos Aires, Palermo Hollywood.",
  },
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Urgencias", href: "/urgencias" },
    { label: "Leer Bien", href: "/leer-bien" },
    { label: "Referencias", href: "/referencias" },
    { label: "Aclaraciones", href: "/aclaraciones" },
  ],
  socialLinks: [
    { id: 1, label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { id: 2, label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { id: 3, label: "WhatsApp", href: "https://wa.me/5491100000000", icon: "whatsapp" },
  ],
  paymentMethods: [
    { id: 1, name: "Mercado Pago", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mercado_Pago_Logo.png/320px-Mercado_Pago_Logo.png" },
    { id: 2, name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png" },
    { id: 3, name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png" },
    { id: 4, name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/320px-American_Express_logo_%282018%29.svg.png" },
    { id: 5, name: "CABAL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cabal_logo.svg/320px-Cabal_logo.svg.png" },
    { id: 6, name: "Maestro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Maestro_logo.svg/320px-Maestro_logo.svg.png" },
  ],
  copyright: "Flama Ancestral",
  madeWith: "Hecho con ♥ por el equipo de Undevcode",
};