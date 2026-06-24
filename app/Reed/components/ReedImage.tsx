import { data } from "../data/reed.data";

export const ReedImage = () => {
  return (
    <div className="relative flex-shrink-0">
      <img
        src={data.img}
        alt={data.title}
        className="w-[280px] h-[420px] object-cover rounded-[20px] block brightness-90 contrast-105"
      />
      <div className="absolute inset-[-4px] rounded-[24px] border border-[rgba(240,96,96,0.25)] pointer-events-none" />
    </div>
  );
};