import { reedData } from "../types/reed.types";

export const data: reedData = {
  eyebrow: "Antes de consultar",
  title: "Leer Bien",
  description: "Aclaraciones importantes sobre políticas de atención y consultas",
  rulesLeft: [
    {
      id: 1,
      text: "Sin Consultas Gratuitas",
      type: "no",
      description: "Ninguna consulta es gratuita. Cada sesión tiene un valor fijo que se abona antes de comenzar.",
    },
    {
      id: 2,
      text: "Sin Trabajo sin Diagnóstico",
      type: "no",
      description: "Ningún trabajo espiritual se realiza sin un diagnóstico previo. El diagnóstico es el primer paso.",
    },
    {
      id: 3,
      text: "Sin Amarres ni Retornos",
      type: "no",
      description: "No realizo amarres ni retornos de ningún tipo. Solo trabajo con energías de protección y equilibrio.",
    },
  ],
  rulesRight: [
    {
      id: 4,
      text: "Sin Atención a Privados de Libertad",
      type: "no",
      description: "No atiendo consultas de personas privadas de libertad ni en situaciones legales activas.",
    },
    {
      id: 5,
      text: "Trabajo a Distancia",
      type: "yes",
      description: "Atiendo a distancia en toda Argentina. No es necesario estar presente para recibir los servicios.",
    },
    {
      id: 6,
      text: "Horario de 15:30 a 21h",
      type: "yes",
      description: "El horario de atención es de 15:30 a 21:00 hs. Fuera de ese horario aplica recargo de urgencia.",
    },
  ],
};