import { forwardRef } from "react";
import { enemigosData } from "../data/enemigos.data";

export const EnemigosBackground = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="absolute inset-[-80px_0] bg-cover bg-center z-0 will-change-transform"
        style={{
          backgroundImage: `url('${enemigosData.backgroundImage}')`,
          filter: "brightness(0.45) saturate(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,2,2,0.3)] to-[rgba(10,2,2,0.55)] z-[1]" />
    </>
  );
});

EnemigosBackground.displayName = "EnemigosBackground";