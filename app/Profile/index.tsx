"use client";

import { useParallax } from "./hooks/useParallax";
import { EnemigosBackground } from "./components/EnemigosBackground";
import { EnemigosText } from "./components/EnemigosText";
import { EnemigosButton } from "./components/EnemigosButton";

export const Enemigos = () => {
  const { bgRef, sectionRef } = useParallax();

  return (
    <section
      ref={sectionRef}
      className="relative -mt-px w-full h-[500px] overflow-hidden flex items-center justify-center bg-[#0a0202]"
    >
      <EnemigosBackground ref={bgRef} />
      <div className="relative z-[2] flex flex-col items-center gap-8 px-6">
        <EnemigosText />
        <EnemigosButton />
      </div>
    </section>
  );
};