import { enemigosData } from "../data/enemigos.data";

export const EnemigosText = () => {
  return (
    <h2 className="text-white text-[52px] font-bold leading-[1.2] text-center"
      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
    >
      {enemigosData.lines.map((line, i) => (
        <span key={i} className="block">{line}</span>
      ))}
    </h2>
  );
};