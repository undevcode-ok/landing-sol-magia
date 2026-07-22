import { Servicie } from "../types/services.type";
import { ServicieCard } from "./ServiceCard";

interface Props {
  servicios: Servicie[];
  onCardClick: (servicio: Servicie) => void;
}

export const ServiciosGrid = ({ servicios, onCardClick }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {servicios.map((s, index) => (
        <ServicieCard key={s.id} servicio={s} onClick={onCardClick} index={index} />
      ))}
    </div>
  );
};