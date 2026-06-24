import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export const CarouselControls = ({ current, total, onPrev, onNext, onGoTo }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center hover:bg-[rgba(240,96,96,0.3)] hover:border-[#f06060] transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={18} />
      </button>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current
                ? "bg-[#f06060] scale-125"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center hover:bg-[rgba(240,96,96,0.3)] hover:border-[#f06060] transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};