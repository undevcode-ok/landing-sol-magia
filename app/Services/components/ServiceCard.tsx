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
        flex
        flex-col
        h-full
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

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-secondary min-h-[64px] flex items-start justify-center text-violet-300 text-2xl font-semibold text-center uppercase">
          {servicio.title}
        </h3>

        <p className="text-zinc-400 min-h-[72px] text-xl font-bold mt-5 line-clamp-3 leading-6 text-left">
          {servicio.desc}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-violet-700/50" />

          <span
            className="
              uppercase
              tracking-[0.2em]
              text-sm
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
  );
};