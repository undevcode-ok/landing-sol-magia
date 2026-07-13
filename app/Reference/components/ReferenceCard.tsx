import { Referencia } from "../types/refence.types";

interface Props {
  referencia: Referencia;
}

export const ReferenceCard = ({ referencia }: Props) => {
  return (
    <div className="
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
    flex-1 bg-white/5 border border-white/10 rounded-[20px] overflow-hidden flex flex-col">
      <img
        src={referencia.avatar}
        alt={referencia.name}
        className="w-full h-[400px] object-cover"
        style={{ filter: "grayscale(0.3)" }}
      />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="text-violet-300 text-4xl tracking-widest">★★★★★</div>
        <p className="text-white/80 text-xl leading-[1.65] italic flex-1">
          "{referencia.text}"
        </p>
        <div className="flex items-center gap-3 mt-2">
          <div>
            <p className="text-white text-2xl font-semibold">{referencia.name}</p>
            <p className="text-white/40 text-lg">{referencia.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};