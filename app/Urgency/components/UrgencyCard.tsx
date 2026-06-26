"use client";

import { urgencyData } from "../data/urgency.data";

interface Props {
  isInView: boolean;
  onClick: () => void;
}

export const UrgencyCard = ({ isInView, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.8s cubic-bezier(0.25,1,0.5,1) 120ms, transform 0.8s cubic-bezier(0.25,1,0.5,1) 120ms",
      }}
    >
      {/* Card header row */}
      <div className="flex items-baseline justify-between mb-2 px-1">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-semibold text-white/90 tracking-tight">
            {urgencyData.title}
          </span>
          <span className="text-lg text-white/40 italic hidden sm:inline">
            {urgencyData.tagline}
          </span>
        </div>
        <span className="text-white/20 text-2xl select-none">+</span>
      </div>

      {/* Card image + hover overlay */}
      <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
        <img
          src={urgencyData.img}
          alt={urgencyData.title}
          className="w-full aspect-[16/6] object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 gap-4">
          <span className="text-white font-bold text-4xl sm:text-4xl tracking-tight text-center px-6 leading-tight drop-shadow-lg">
            {urgencyData.title}
          </span>
          <span className="text-white/75 text-xl text-center px-8 max-w-lg leading-snug">
            {urgencyData.shortDesc.slice(0, 90)}…
          </span>
          <span className="mt-2 px-14 py-2 rounded-full bg-[#c0392b] text-white text-2xl font-semibold tracking-wide">
            Ver detalles
          </span>
        </div>

        {/* Tag badge */}
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-medium tracking-widest uppercase">
          {urgencyData.tag}
        </span>
      </div>

      {/* Description row below card */}
      
    </div>
  );
};