import { reedData } from "../types/reed.types";

export const data: reedData = {
  title: "Leer Bien",
  description: "Aclaraciones importantes sobre políticas de atención y consultas",
  img: "/img/profile/perfil.webp",
  rulesLeft: [
    { id: 1, text: "Ninguna Consulta es Gratuita", type: "no" },
    { id: 2, text: "Ningún trabajo se realiza sin Diagnóstico", type: "no" },
    { id: 3, text: "No Hago Amarres ni Retornos", type: "no" },
  ],
  rulesRight: [
    { id: 4, text: "No Atiendo a Personas Privadas de Libertad", type: "no" },
    { id: 5, text: "Trabajo a Distancia toda Argentina", type: "yes" },
    { id: 6, text: "Atención de 15:30 a 21h", type: "yes" },
  ],
};