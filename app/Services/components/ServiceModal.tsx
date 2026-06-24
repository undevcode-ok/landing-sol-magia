"use client";

import { X, MessageCircle } from "lucide-react";
import { Servicie } from "../types/services.type";
import { WP_NUMBER } from "../data/service.data";

interface Props {
  servicio: Servicie;
  onClose: () => void;
}

export const ServicieModal = ({ servicio, onClose }: Props) => {
  const wpMessage = encodeURIComponent(
    `Hola, quiero consultar sobre el servicio de ${servicio.title}`
  );
  const wpUrl = `https://wa.me/${WP_NUMBER}?text=${wpMessage}`;

  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1c0a0a] rounded-2xl max-w-[460px] w-full overflow-hidden border border-[#3a1010]">
        <div className="relative">
          <img
            src={servicio.img}
            alt={servicio.title}
            className="w-full h-[190px] object-cover grayscale"
          />
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-white text-[17px] font-extrabold uppercase tracking-wide mb-3">
            {servicio.title}
          </h3>
          <p className="text-[#ccc] text-[13px] leading-[1.7] mb-6">
            {servicio.desc}
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="border border-[#555] text-[#aaa] text-[13px] px-5 py-2 rounded-full bg-transparent cursor-pointer hover:border-[#888] transition-colors"
            >
              Cerrar
            </button>
            <a
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[13px] font-semibold px-5 py-2 rounded-full flex items-center gap-2 transition-colors no-underline"
            >
              <MessageCircle size={15} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};