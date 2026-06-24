"use client";

import { useUrgencyModal } from "./hooks/useUrgencyModal";
import {  UrgencyCard } from "./components/UrgencyCard";
import {  UrgencyModal } from "./components/UrgencyModal";
import { UrgencyWPButton } from "./components/UrgencyWPModal";

export const Urgency = () => {
  const { isOpen, openModal, closeModal } = useUrgencyModal();

  return (
    <section className="bg-[#111] py-12 px-6 flex flex-col items-center gap-9">
      <UrgencyCard onClick={openModal} />
      <UrgencyWPButton />
      {isOpen && <UrgencyModal onClose={closeModal} />}
    </section>
  );
};