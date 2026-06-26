"use client";

import { useUrgencyModal } from "./hooks/useUrgencyModal";
import { useInView } from "./hooks/useInView";
import { UrgencyCard } from "./components/UrgencyCard";
import { UrgencyModal } from "./components/UrgencyModal";
import { UrgencyWPButton } from "./components/UrgencyWPModal";
import { URGENCY_META } from "./data/urgency.data";

export const Urgency = () => {
  const { isOpen, openModal, closeModal } = useUrgencyModal();
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="urgency"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full bg-[#111] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-2 mb-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="w-5 h-5 rounded-full bg-[#c0392b] flex items-center justify-center text-white text-xs font-bold leading-none">
            !
          </span>
          <span className="text-sm font-medium text-white/50 tracking-wide">
            {URGENCY_META.eyebrow}
          </span>
        </div>

        {/* Header */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s 80ms ease, transform 0.7s 80ms ease",
          }}
        >
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-[clamp(4rem,10vw,7rem)] font-bold leading-none tracking-tight text-white">
              {URGENCY_META.title}
              <span className="text-[#c0392b]">{URGENCY_META.titleAccent}</span>
            </h2>
            <p className="text-white/40 text-base mt-2">{URGENCY_META.subtitle}</p>
          </div>
          <p className="text-white/40 text-sm leading-relaxed text-left md:text-right">
            {URGENCY_META.description}
          </p>
        </div>

        {/* Card */}
        <UrgencyCard isInView={isInView} onClick={openModal} />

        {/* CTA */}
        <div
          className="mt-10"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.7s 500ms ease",
          }}
        >
          <UrgencyWPButton />
        </div>

      </div>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#3d0a0a] pointer-events-none" />

      {isOpen && <UrgencyModal onClose={closeModal} />}
    </section>
  );
};