"use client";

import { useRef, useEffect, useState } from "react";
import { ReferenceHeader } from "./components/ReferenceHeader";
import { ReferenceCard } from "./components/ReferenceCard";
import { ReferenceMobileCarousel } from "./components/ReferenceMobileCarousel";
import { referencias } from "./data/reference.data";

export const Reference = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile — carrusel fullscreen */}
      <div className="block sm:hidden">
        <ReferenceMobileCarousel />
      </div>

      {/* Tablet / Desktop */}
      <section
        id="references"
        className="hidden sm:block w-full"
        style={{ background: "linear-gradient(180deg, #0f0202 0%, #1a0505 100%)" }}
      >
        {/* Header con padding */}
        <div className="py-20 px-6 md:px-10">
          <ReferenceHeader />
        </div>

        {/* Grid full viewport — sin max-w, sin padding lateral */}
        <div
          ref={ref}
          className="grid grid-cols-4 gap-[3px] w-full"
        >
          {referencias.map((referencia, i) => (
            <ReferenceCard
              key={referencia.id}
              referencia={referencia}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </section>
    </>
  );
};