import { Servicie } from "../types/services.type";
import { ServicieCard } from "./ServiceCard";

interface Props {
  servicios: Servicie[];
  onCardClick: (servicio: Servicie) => void;
}

export const ServiciosGrid = ({ servicios, onCardClick }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
      {servicios.map((s) => (
        <ServicieCard key={s.id} servicio={s} onClick={onCardClick} />
      ))}
    </div>
  );
};