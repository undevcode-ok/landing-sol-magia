import { WP_NUMBER } from "../data/urgency.data";

export const UrgencyWPButton = () => {
  const wpUrl = `https://wa.me/${WP_NUMBER}?text=${encodeURIComponent("Hola, quiero comunicarme")}`;

  return (
    <div
      className="flex justify-center"
    >
      <a
        href={wpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-sm font-semibold text-white/70 border-b border-white/30 pb-0.5 hover:text-[#c0392b] hover:border-[#c0392b] transition-colors duration-300 no-underline"
      >
        Comunicarse ahora
        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};