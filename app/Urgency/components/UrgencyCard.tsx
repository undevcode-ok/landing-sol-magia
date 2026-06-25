import { urgencyData } from "../data/urgency.data";

interface Props {
  onClick: () => void;
}

export const UrgencyCard = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        max-w-7xl
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
      <div className="flex flex-col md:flex-row">
        <div className="overflow-hidden md:w-[360px] shrink-0">
          <img
            src={urgencyData.img}
            alt={urgencyData.title}
            className="
              w-full
              h-full
              min-h-[320px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />
        </div>

        <div className="flex flex-1 flex-col justify-center px-10 py-10">
          <h3 className="mb-4 text-3xl font-semibold text-white">
            {urgencyData.title}
          </h3>

          <p className="mb-8 max-w-4xl text-base leading-8 text-zinc-300">
            {urgencyData.shortDesc}
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-violet-700/60" />

            <span
              className="
                uppercase
                tracking-[0.18em]
                text-xs
                font-semibold
                text-violet-300
                transition-colors
                duration-300
                group-hover:text-violet-100
              "
            >
              Ver Detalles
            </span>

            <div className="h-px w-10 bg-violet-700/60" />
          </div>
        </div>
      </div>
    </div>
  );
};