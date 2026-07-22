import { MessageCircle } from "lucide-react";
import {  enemigosData } from "../data/enemigos.data";
import { buildWhatsAppUrl } from "@/app/Globals";

export const EnemigosButton = () => {
  const wpUrl = buildWhatsAppUrl(enemigosData.wpMessage);

  return (
    <a
      href={wpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-secondary bg-[#581c87] hover:bg-[#3b0764] text-white text-sm sm:text-base lg:text-lg font-bold uppercase tracking-widest px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full flex items-center gap-3 transition-colors no-underline"
    >
      {/*<MessageCircle size={16} />*/}
      Comunicarse
    </a>
  );
};