"use client";

import { ChevronUp } from "lucide-react";
import { useStickyButtons } from "./hooks/useStickyButtons";
import { buildWhatsAppUrl } from "@/app/Globals";


export const StickyButtons = () => {
  const { isVisible, scrollToTop } = useStickyButtons();

  if (!isVisible) return null;

  const wpUrl = buildWhatsAppUrl();

  return (
    <>
      {/* Flecha — izquierda */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="fixed  bottom-12 left-6 z-50 w-20 h-20 rounded-full bg-[rgba(255,255,255,0.15)] border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#8b2500] hover:border-[#8b2500] transition-all duration-200"
      >
        <ChevronUp size={32} />
      </button>
 
      {/* WhatsApp — derecha */}
      <a
        href={wpUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-12 right-6 z-50 group flex items-center gap-3"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-[#1a1a1a] text-[13px] font-medium px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
          Click para Comunicarse →
        </span>
        <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200">
          <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.8a.5.5 0 00.609.61l6.101-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.692-.5-5.24-1.375l-.374-.216-3.878 1.016 1.034-3.772-.232-.384A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </div>
      </a>
    </>
  );
};