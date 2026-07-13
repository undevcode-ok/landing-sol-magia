import { reedData } from "../types/reed.types";

export const data: reedData = {
  title: "Leer Bien",
  description: "Aclaraciones importantes sobre políticas de atención y consultas",
  img: "/img/profile/perfil.png",
  rulesLeft: [
    { id: 1, text: "Todos los trabajos deberán abonarse previamente para confirmar el turno.", type: "yes" },
    { id: 2, text: "Es obligatorio enviar el comprobante de transferencia una vez realizado el pago.", type: "yes" },
    { id: 3, text: "Al solicitar un turno, el consultante acepta estas condiciones de contratación.", type: "yes" },
  ],
  rulesRight: [
    { id: 4, text: "No se realizarán devoluciones, reemplazos ni reprogramaciones de turnos ya confirmados.", type: "no" },
    { id: 5, text: "Las curaciones, sanaciones y limpiezas energéticas no tendrán costo para niños.", type: "no" },
    { id: 6, text: "Una vez abonado y confirmado el turno, no se admitirán cancelaciones.", type: "no" },
  ],
};

