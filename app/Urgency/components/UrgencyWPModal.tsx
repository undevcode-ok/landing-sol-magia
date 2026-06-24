import { MessageCircle } from "lucide-react";
import { WP_NUMBER } from "../data/urgency.data";

export const UrgencyWPButton = () => {
  const wpUrl = `https://wa.me/${WP_NUMBER}?text=${encodeURIComponent("Hola, quiero comunicarme")}`;

  return (
    <a
      href={wpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#f06060] hover:bg-[#d94f4f] text-white text-base uppercase tracking-widest px-10 py-4 rounded-full flex items-center gap-3 transition-colors no-underline"
    >
      <MessageCircle size={18} />
      Click para comunicarse
    </a>
  );
};