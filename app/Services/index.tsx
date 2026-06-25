"use client";

import { servicios } from "./data/service.data";
import { useServicesModal } from "./hooks/useServiceModal";
import { ServiciosGrid } from "./components/ServiceGrid";
import { ServicieModal } from "./components/ServiceModal";

export const Services = () => {
  const { selected, openModal, closeModal } = useServicesModal();

  return (
    <section className="bg-[#111] py-12 px-6">
      <ServiciosGrid servicios={servicios} onCardClick={openModal} />
      {selected && <ServicioModal servicio={selected} onClose={closeModal} />}
    </section>
  );
};