import { Servicie } from "../types/services.type";

interface Props {
  servicio: Servicie;
  onClick: (servicio: Servicie) => void;
}

export const ServicieCard = ({ servicio, onClick }: Props) => {
  return (
    <div
  onClick={() => onClick(servicio)}
  className="
    group
    cursor-pointer
    overflow-hidden
    rounded-3xl
    bg-zinc-900
    border
    border-violet-800/40
    shadow-lg
    shadow-black/40
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-violet-500
  "
>
  <div className="overflow-hidden">
    <img
      src={servicio.img}
      alt={servicio.title}
      className="
        w-full
        aspect-[3/4]
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />
  </div>

  <div className="p-5">
    <h3 className="text-white text-lg font-semibold text-center">
      {servicio.title}
    </h3>

    <p className="text-zinc-400 text-sm mt-3 line-clamp-3 min-h-[64px] leading-6 text-left">
      {servicio.desc}
    </p>

    <div className="mt-5 flex items-center justify-center">
  <div className="mt-5 flex items-center justify-center gap-3">
  <div className="h-px w-8 bg-violet-700/50" />

  <span
    className="
      uppercase
      tracking-[0.2em]
      text-xs
      font-semibold
      text-violet-300
      transition-colors
      duration-300
      group-hover:text-violet-100
    "
  >
    Ver Servicio
  </span>

  <div className="h-px w-8 bg-violet-700/50" />
</div>
</div>
  </div>
</div>
  );
};