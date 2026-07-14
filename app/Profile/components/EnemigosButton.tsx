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
      className="font-secondary bg-[#581c87] hover:bg-[#3b0764] text-white text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full flex items-center gap-3 transition-colors no-underline"
    >
      {/*<MessageCircle size={16} />*/}
      Comunicarse
    </a>
  );
};