"use client";

import { servicios, SERVICES_META } from "./data/service.data";
import { useServicesModal } from "./hooks/useServiceModal";
import { useInView } from "./hooks/useInView";
import { ServiciosGrid } from "./components/ServiceGrid";
import { ServicieModal } from "./components/ServiceModal";

export const Services = () => {
  const { selected, openModal, closeModal } = useServicesModal();
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full bg-[#111] py-20 px-6"
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
            +
          </span>
          <span className="text-sm font-medium text-white/50 tracking-wide">
            {SERVICES_META.eyebrow}
          </span>
        </div>

        {/* Header: título enorme + descripción a la derecha */}
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
              {SERVICES_META.title}
              <span className="text-[#c0392b]">{SERVICES_META.titleAccent}</span>
            </h2>
            <p className="text-white/40 text-base mt-2">{SERVICES_META.subtitle}</p>
          </div>
          <p className="text-white/40 text-sm leading-relaxed text-left md:text-right">
            {SERVICES_META.description}
          </p>
        </div>

        {/* Grid 2x2 */}
        <ServiciosGrid
          servicios={servicios}
          isInView={isInView}
          onCardClick={openModal}
        />

        {/* CTA */}
        <div
          className="flex justify-center"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.7s 600ms ease",
          }}
        >
          <a
            href={`https://wa.me/5491100000000`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm font-semibold text-white/70 border-b border-white/30 pb-0.5 hover:text-[#c0392b] hover:border-[#c0392b] transition-colors duration-300 no-underline"
          >
            {SERVICES_META.cta}
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>

      {selected && <ServicieModal servicio={selected} onClose={closeModal} />}
    </section>
  );
};