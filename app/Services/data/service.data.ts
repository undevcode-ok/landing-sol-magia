import { Servicie, ServicesData } from "../types/services.type";

export const WP_NUMBER = "5491100000000";

export const SERVICES_META: ServicesData = {
  eyebrow: "Lo que ofrezco",
  title: "Servicios",
  titleAccent: ".",
  subtitle: "Magia ancestral, resultados reales.",
  description:
    "Cada ritual es único y se trabaja con la energía específica de cada persona. Atención personalizada y confidencial a distancia en todo el país.",
  cta: "Consultar por WhatsApp",
};

export const servicios: Servicie[] = [
  {
    id: 1,
    title: "Videncia",
    tagline: "/La energía habla por sí sola.",
    img: "/img/services/vidente.webp",
    tag: "Consulta personal",
    desc: "A través de la videncia puedo percibir situaciones pasadas, presentes y futuras de tu vida. Sin necesidad de datos previos, la energía habla por sí sola. Consulta personalizada y confidencial.",
  },
  {
    id: 2,
    title: "Limpieza Energética",
    tagline: "/Liberate de lo que te frena.",
    img: "/img/services/limpieza.webp",
    tag: "Ritual ancestral",
    desc: "Limpieza del aura y los centros energéticos mediante rituales ancestrales. Elimina cargas negativas acumuladas, envidias y bloqueos emocionales que frenan tu avance.",
  },
  {
    id: 3,
    title: "Protección y Blindaje",
    tagline: "/Tu escudo contra lo invisible.",
    img: "/img/services/proteccion.webp",
    tag: "Escudo energético",
    desc: "Rituales de protección y blindaje energético contra terceros. Limpia espiritualmente y aplica escudos contra envidias, bloqueos, daños, mal de ojo y brujerías.",
  },
  {
    id: 4,
    title: "Corte de Lazos",
    tagline: "/Rompe los vínculos que te dañan.",
    img: "/img/services/lazos.webp",
    tag: "Liberación",
    desc: "Corte de lazos kármicos y emocionales que te atan a personas o situaciones que ya no te hacen bien. Ritual profundo de desapego y sanación energética.",
  },
];