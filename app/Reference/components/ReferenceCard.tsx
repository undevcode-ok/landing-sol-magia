"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Referencia } from "../types/refence.types";

interface Props {
  referencia: Referencia;
  index: number;
  isVisible: boolean;
}

export const ReferenceCard = ({ referencia, index, isVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.12,
      }}
      className="relative overflow-hidden cursor-pointer group"
      style={{ height: "75vh" }}
    >
      {/* Portrait image */}
      <Image
        src={referencia.avatar}
        alt={referencia.name}
        fill
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes="25vw"
      />

      {/* Base gradient — siempre visible, sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700" />

      {/* Hover overlay oscuro con efecto ritual */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(80,10,10,0.92) 0%, rgba(10,2,2,0.97) 100%)",
        }}
      />

      {/* Partículas SVG — runa/símbolo decorativo centrado, aparece en hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="absolute opacity-[0.06]"
          style={{ transform: "rotate(0deg)", transition: "transform 1.5s ease" }}>
          <circle cx="90" cy="90" r="80" stroke="#b8860b" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="90" cy="90" r="55" stroke="#b8860b" strokeWidth="0.3" strokeDasharray="2 8" />
          <polygon points="90,15 160,60 160,120 90,165 20,120 20,60" stroke="#b8860b" strokeWidth="0.4" fill="none" />
          <line x1="90" y1="10" x2="90" y2="170" stroke="#b8860b" strokeWidth="0.3" opacity="0.5"/>
          <line x1="10" y1="90" x2="170" y2="90" stroke="#b8860b" strokeWidth="0.3" opacity="0.5"/>
        </svg>
      </div>

      {/* Nombre siempre visible abajo — desaparece en hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
        <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mb-1">{referencia.service}</p>
        <p className="text-white text-lg font-semibold">{referencia.name}</p>
      </div>

      {/* Contenido hover — sube desde abajo con efecto ritual */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center
        opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-700 ease-out"
      >
        {/* Ornamento superior */}
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="mb-5 opacity-60">
          <line x1="0" y1="6" x2="20" y2="6" stroke="#b8860b" strokeWidth="0.5"/>
          <polygon points="25,6 30,2 35,6 30,10" fill="none" stroke="#b8860b" strokeWidth="0.8"/>
          <line x1="40" y1="6" x2="60" y2="6" stroke="#b8860b" strokeWidth="0.5"/>
        </svg>

        {/* Servicio */}
        <p className="text-[9px] uppercase tracking-[0.4em] text-[#b8860b]/70 mb-3">
          {referencia.service}
        </p>

        {/* Estrellas */}
        <div className="text-[#c0392b] text-xs tracking-[0.3em] mb-4">★ ★ ★ ★ ★</div>

        {/* Testimonio */}
        <p
          className="text-white/90 text-sm leading-[1.8] italic mb-6"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17 }}
        >
          "{referencia.text}"
        </p>

        {/* Ornamento separador */}
        <div className="w-6 h-[0.5px] bg-[#b8860b]/40 mb-4" />

        {/* Nombre + ciudad */}
        <p className="text-white text-base font-semibold tracking-wide">{referencia.name}</p>
        <p className="text-white/35 text-[10px] tracking-widest uppercase mt-1">{referencia.location}</p>

        {/* Ornamento inferior */}
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="mt-5 opacity-60">
          <line x1="0" y1="6" x2="20" y2="6" stroke="#b8860b" strokeWidth="0.5"/>
          <polygon points="25,6 30,2 35,6 30,10" fill="none" stroke="#b8860b" strokeWidth="0.8"/>
          <line x1="40" y1="6" x2="60" y2="6" stroke="#b8860b" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Borde inferior dorado que crece en hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#b8860b]/0 group-hover:bg-[#b8860b]/40 transition-all duration-700" />
    </motion.div>
  );
};