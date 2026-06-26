import { Servicie } from "../types/services.type";
import { ServiceCard } from "./ServiceCard";

interface Props {
  servicios: Servicie[];
  isInView: boolean;
  onCardClick: (servicio: Servicie) => void;
}

export const ServiciosGrid = ({ servicios, isInView, onCardClick }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
      {servicios.map((s, index) => (
        <ServiceCard
          key={s.id}
          servicio={s}
          index={index}
          isInView={isInView}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};