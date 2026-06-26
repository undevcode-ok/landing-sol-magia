"use client";

import { Servicie } from "../types/services.type";

interface ServiceCardProps {
  servicio: Servicie;
  index: number;
  isInView: boolean;
  onClick: (servicio: Servicie) => void;
}

export const ServiceCard = ({ servicio, index, isInView, onClick }: ServiceCardProps) => {
  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.8s cubic-bezier(0.25,1,0.5,1) ${index * 120}ms, transform 0.8s cubic-bezier(0.25,1,0.5,1) ${index * 120}ms`,
      }}
    >
      {/* Card header row */}
      <div className="flex items-baseline justify-between mb-2 px-1">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-semibold text-white/90 tracking-tight">
            {servicio.title}
          </span>
          <span className="text-lg text-white/40 italic hidden sm:inline">
            {servicio.tagline}
          </span>
        </div>
        <span className="text-white/20 text-2xl select-none">+</span>
      </div>

      {/* Image with blur hover */}
      <div
        onClick={() => onClick(servicio)}
        className="group block relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
      >
        {/* Image */}
        <img
          src={servicio.img}
          alt={servicio.title}
          className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 gap-3">
          <span className="text-white font-bold text-2xl sm:text-3xl tracking-tight text-center px-6 leading-tight drop-shadow-lg">
            {servicio.title}
          </span>
          <span className="text-white/75 text-lg text-center px-8 leading-snug">
            {servicio.desc.slice(0, 80)}…
          </span>
          <span className="mt-2 px-5 py-2 rounded-full bg-[#c0392b] text-white text-lg font-semibold tracking-wide">
            Ver servicio
          </span>
        </div>

        {/* Tag badge */}
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 text-sm font-medium tracking-widest uppercase">
          {servicio.tag}
        </span>
      </div>
    </div>
  );
};