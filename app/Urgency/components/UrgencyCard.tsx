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
        w-full
        max-w-7xl
        mx-auto
        bg-zinc-900
        border
        border-transparent
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
              h-80
              min-h-[320px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 md:px-10 md:py-10">
          <h3 className="font-secondary min-h-[64px] flex  text-violet-300 text-2xl font-semibold text-center uppercase">
            {urgencyData.title}
          </h3>

          <p className="text-zinc-300 mb-8 text-xl font-bold max-w-4xl text-base leading-8">
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
                text-center
                md:text-left
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