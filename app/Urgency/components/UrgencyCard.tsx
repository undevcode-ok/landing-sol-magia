import { urgencyData } from "../data/urgency.data";

interface Props {
  onClick: () => void;
}

export const UrgencyCard = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#f06060] rounded-2xl flex items-center gap-8 p-5 pr-9 max-w-[1000px] w-full cursor-pointer transition-transform duration-200  group"
    >
      <img
        src={urgencyData.img}
        alt={urgencyData.title}
        className="w-[220px] min-w-[220px] aspect-square object-cover rounded-xl transition-all duration-500 grayscale-0 group-hover:grayscale"
      />
      <div className="flex-1">
        <p className="text-2xl uppercase text-[#1a0000] mb-3 tracking-wide">
          {urgencyData.title}
        </p>
        <p className="text-lg text-[#1a0000] leading-[1.75] mb-4">
          {urgencyData.shortDesc}
        </p>
        <button className="text-lg font-medium text-[#1a0000] hover:text-white bg-transparent border-none cursor-pointer p-0">
          Ver más →
        </button>
      </div>
    </div>
  );
};