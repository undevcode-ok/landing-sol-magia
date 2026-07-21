import { Referencia } from "../types/refence.types";

interface Props {
  referencia: Referencia;
}

export const ReferenceCard = ({ referencia }: Props) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 flex flex-col gap-4 hover:border-violet-500 transition-colors duration-300">
      <div className="text-violet-300 text-2xl tracking-widest">★★★★★</div>
      <p className="text-white/80 text-lg leading-[1.65] italic flex-1">
        “{referencia.text}”
      </p>
      <div>
        <p className="text-white text-lg font-semibold">{referencia.name}</p>
        <p className="text-white/40 text-sm">{referencia.location}</p>
      </div>
    </div>
  );
};