import { MessageCircle } from "lucide-react";
import { WP_NUMBER, enemigosData } from "../data/enemigos.data";

export const EnemigosButton = () => {
  const wpUrl = `https://wa.me/${WP_NUMBER}?text=${encodeURIComponent(enemigosData.wpMessage)}`;

  return (
    <a
      href={wpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#f06060] hover:bg-[#d94f4f] text-white text-[14px] font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-colors no-underline"
    >
      <MessageCircle size={16} />
      Comunicarse
    </a>
  );
};