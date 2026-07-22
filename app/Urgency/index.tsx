"use client";

import { useUrgencyModal } from "./hooks/useUrgencyModal";
import {  UrgencyCard } from "./components/UrgencyCard";
import {  UrgencyModal } from "./components/UrgencyModal";
import { UrgencyWPButton } from "./components/UrgencyWPModal";

export const Urgency = () => {
  const { isOpen, openModal, closeModal } = useUrgencyModal();

  return (
    <section id="urgency" className="relative bg-[#111] pt-12 pb-32 px-6 flex flex-col items-center gap-9 -mt-px -mb-px">
      <UrgencyCard onClick={openModal} />
      <UrgencyWPButton />
      {isOpen && <UrgencyModal onClose={closeModal} />}

      {/* Fade inferior hacia violeta oscuro */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111]/0 to-[#2e1065] pointer-events-none" />
    </section>
  );
};