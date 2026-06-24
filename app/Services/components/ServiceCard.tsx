import { Servicie } from "../types/services.type";

interface Props {
  servicio: Servicie;
  onClick: (servicio: Servicie) => void;
}

export const ServicieCard = ({ servicio, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(servicio)}
      className="bg-[#f06060] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200  group p-3 pb-4"
    >
      <img
        src={servicio.img}
        alt={servicio.title}
        loading="lazy"
        className="w-full aspect-[4/4] object-cover block rounded-xl transition-all duration-500 grayscale-0 group-hover:grayscale"
      />
      <div className="pt-3 pb-1">
        <p className="text-2xl  uppercase text-[#1a0000] text-center mb-2 leading-snug min-h-[34px] flex items-center justify-center">
          {servicio.title}
        </p>
        <button className="flex items-center justify-center hover:text-white  gap-1 text-lg text-[#1a0000]  w-full bg-transparent border-none cursor-pointer">
          Ver más →
        </button>
      </div>
    </div>
  );
};