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
      className="bg-[#581c87] hover:bg-[#3b0764] text-white text-[14px] font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-colors no-underline"
    >
      <MessageCircle size={16} />
      Comunicarse
    </a>
  );
};