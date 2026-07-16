"use client";

import { X, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/app/Globals";
import { urgencyData } from "../data/urgency.data";

interface Props {
  onClose: () => void;
}

export const UrgencyModal = ({ onClose }: Props) => {
  const wpUrl = buildWhatsAppUrl(urgencyData.wpMessage);

  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 rounded-2xl max-w-[640px] w-full max-h-[85vh] overflow-y-auto no-scrollbar border border-violet-800/40">
        <div className="relative">
          <img
            src={urgencyData.img}
            alt={urgencyData.title}
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
            {urgencyData.title}
          </h3>
          <p className="text-[#ccc] text-xl leading-[1.7] mb-6 whitespace-pre-line">
            {urgencyData.fullDesc}
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="border border-[#555] text-[#aaa] text-xl px-5 py-2 rounded-full bg-transparent cursor-pointer hover:border-violet-300 hover:text-violet-300 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xl font-semibold px-5 py-2 rounded-full flex items-center gap-2 transition-colors no-underline"
            >
              {/*<MessageCircle size={18} />*/}
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};