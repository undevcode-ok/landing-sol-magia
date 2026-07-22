"use client";

import { X, ChevronDown, CircleCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/app/Globals";
import { Servicie } from "../types/services.type";
import { useExpandableText } from "../hooks/useExpandableText";

interface Props {
  servicio: Servicie;
  onClose: () => void;
}

export const ServicieModal = ({ servicio, onClose }: Props) => {
  const wpUrl = buildWhatsAppUrl(
    `¡Hola! Estuve visitando tu página web y quisiera ponerme en contacto con vos para hacer una consulta sobre el servicio de ${servicio.title}`
  );
  const { textRef, isExpanded, canExpand, toggle, COLLAPSED_HEIGHT_PX } =
    useExpandableText();

  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 rounded-2xl max-w-[640px] w-full max-h-[85vh] overflow-y-auto no-scrollbar border border-violet-800/40">
        <div className="relative">
          <img
            src={servicio.img}
            alt={servicio.title}
            className="w-full h-[260px] object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 hover:text-violet-300 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-8">
          <h3 className="font-secondary text-white text-2xl font-extrabold uppercase tracking-wide mb-4">
            {servicio.title}
          </h3>

          <div className="relative">
            <p
              ref={textRef}
              style={{
                maxHeight: isExpanded ? "1000px" : `${COLLAPSED_HEIGHT_PX}px`,
              }}
              className="text-[#ccc] text-xl  leading-[1.7] whitespace-pre-line overflow-hidden transition-all duration-300 ease-in-out"
            >
              {servicio.desc}
            </p>
            {!isExpanded && canExpand && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
            )}
          </div>

          {canExpand && (
            <button
              onClick={toggle}
              className="mt-2 flex items-center gap-1 text-violet-300 text-lg font-medium hover:text-violet-200 transition-colors cursor-pointer"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {servicio.items && servicio.items.length > 0 && (
            <>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-violet-700/50" />
                <span className="uppercase lg:tracking-[0.2em]  text-base sm:text-base lg:text-lg font-semibold text-violet-300">
                  Condiciones del servicio
                </span>
                <div className="h-px w-8 bg-violet-700/50" />
              </div>

              <ul className="mt-4 flex flex-col gap-2.5">
                {servicio.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-zinc-200 text-xl leading-snug tracking-wide"
                  >
                    <CircleCheck
                      size={18}
                      className="text-violet-400 shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="flex items-center justify-between gap-3 mt-6">
            <button
              onClick={onClose}
              className="font-secondary border border-[#555]  transition-colors text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 sm:px-10 py-3 sm:py-4  gap-3 rounded-full flex items-center no-underline cursor-pointer  hover:border-violet-300 hover:text-violet-300"
            >
              Cerrar
            </button>
            <a
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-secondary bg-[#581c87] hover:bg-[#3b0764] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 sm:px-10 py-3 sm:py-4 rounded-full flex items-center gap-3 transition-colors no-underline"
            >
              Solicitar turno
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};