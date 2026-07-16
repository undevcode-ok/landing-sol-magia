"use client";

import { useState, useEffect } from "react";
import { Servicie } from "../types/services.type";

export const useServicesModal = () => {
  const [selected, setSelected] = useState<Servicie | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openModal = (servicio: Servicie) => setSelected(servicio);
  const closeModal = () => setSelected(null);

  return { selected, openModal, closeModal };
};