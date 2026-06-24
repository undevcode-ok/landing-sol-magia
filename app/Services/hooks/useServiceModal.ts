"use client";

import { useState } from "react";
import { Servicie } from "../types/services.type";

export const useServicesModal = () => {
  const [selected, setSelected] = useState<Servicie | null>(null);

  const openModal = (servicio: Servicie) => setSelected(servicio);
  const closeModal = () => setSelected(null);

  return { selected, openModal, closeModal };
};