"use client";

import { useEffect } from "react";
import { Servicie } from "../types/services.type";
import { WP_NUMBER } from "../data/service.data";

interface Props {
  servicio: Servicie;
  onClose: () => void;
}

const WpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const RuneSymbol = () => (
  <svg width="260" height="260" viewBox="0 0 260 260" fill="none" className="absolute inset-0 m-auto opacity-[0.04] pointer-events-none">
    <circle cx="130" cy="130" r="120" stroke="#b8860b" strokeWidth="0.5" strokeDasharray="4 7"/>
    <circle cx="130" cy="130" r="85" stroke="#b8860b" strokeWidth="0.4" strokeDasharray="2 9"/>
    <polygon points="130,20 230,80 230,180 130,240 30,180 30,80" stroke="#b8860b" strokeWidth="0.6" fill="none"/>
    <polygon points="130,55 200,97 200,163 130,205 60,163 60,97" stroke="#b8860b" strokeWidth="0.4" fill="none"/>
    <line x1="130" y1="10" x2="130" y2="250" stroke="#b8860b" strokeWidth="0.3"/>
    <line x1="10" y1="130" x2="250" y2="130" stroke="#b8860b" strokeWidth="0.3"/>
    <line x1="40" y1="40" x2="220" y2="220" stroke="#b8860b" strokeWidth="0.3"/>
    <line x1="220" y1="40" x2="40" y2="220" stroke="#b8860b" strokeWidth="0.3"/>
    <circle cx="130" cy="130" r="6" stroke="#b8860b" strokeWidth="0.6" fill="none"/>
  </svg>
);

const OrnamentDivider = () => (
  <div className="flex items-center gap-3 my-5">
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,134,11,0.25))" }}/>
    <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
      <polygon points="12,5 17,1 22,5 17,9" fill="none" stroke="#b8860b" strokeWidth="0.7"/>
      <circle cx="20" cy="5" r="1.5" fill="#b8860b"/>
      <polygon points="18,5 23,1 28,5 23,9" fill="none" stroke="#b8860b" strokeWidth="0.7"/>
    </svg>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(184,134,11,0.25), transparent)" }}/>
  </div>
);

export const ServicieModal = ({ servicio, onClose }: Props) => {
  const wpUrl = `https://wa.me/${WP_NUMBER}?text=${encodeURIComponent(`Hola, quiero consultar sobre el servicio de ${servicio.title}`)}`;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(12px)", background: "rgba(5,0,0,0.85)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-3xl overflow-hidden"
        style={{
         
          background: "linear-gradient(160deg, #1a0707 0%, #0f0303 100%)",
          border: "1px solid rgba(184,134,11,0.15)",
          borderRadius: 20,
          boxShadow: "0 0 80px rgba(120,10,10,0.3), 0 0 0 1px rgba(255,255,255,0.04) inset",
          animation: "modalIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Rune symbol background */}
        <RuneSymbol />

        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "1px solid rgba(184,134,11,0.4)", borderLeft: "1px solid rgba(184,134,11,0.4)" }}/>
        <span className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "1px solid rgba(184,134,11,0.4)", borderRight: "1px solid rgba(184,134,11,0.4)" }}/>
        <span className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "1px solid rgba(184,134,11,0.4)", borderLeft: "1px solid rgba(184,134,11,0.4)" }}/>
        <span className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "1px solid rgba(184,134,11,0.4)", borderRight: "1px solid rgba(184,134,11,0.4)" }}/>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={servicio.img}
            alt={servicio.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5) saturate(0.8)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, #0f0303 100%)" }}/>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 pb-8 pt-3">
          {/* Eyebrow */}
          

          {/* Title */}
          <h3
            className="text-white font-bold tracking-wide leading-tight mb-1"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 48 }}
          >
            {servicio.title}
          </h3>

          <OrnamentDivider />

          {/* Description */}
          <p className="text-2xl leading-[1.8] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            {servicio.desc}
          </p>

          {/* Glow line */}
          <div className="w-full h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(192,57,43,0.3), transparent)" }}/>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 text-2xl tracking-wide transition-all duration-200 rounded-xl"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.35)",
                background: "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
              }}
            >
              Cerrar
            </button>
            <a
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[2] py-3 flex items-center justify-center gap-2 text-2xl font-semibold tracking-wide no-underline rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #1a8a3e 0%, #25D366 100%)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(37,211,102,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(37,211,102,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(37,211,102,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};