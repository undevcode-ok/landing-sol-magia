"use client";

import { useCarousel } from "./hooks/useCarousel";
import { ReferenceHeader } from "./components/ReferenceHeader";
import { ReferenceCard } from "./components/ReferenceCard";
import { CarouselControls } from "./components/CarouselControl";

export const Reference = () => {
  const { current, totalSlides, currentRefs, next, prev, goTo } = useCarousel();

  return (
    <section id="references"
      className="py-[72px] px-12 flex flex-col items-center gap-12"
      style={{
        background: "#3d0a0a",
      }}
    >
      <ReferenceHeader />
      <div className="w-full max-w-7xl">
        <div className="flex gap-6 transition-all duration-500">
          {currentRefs.map((ref) => (
            <ReferenceCard key={ref.id} referencia={ref} />
          ))}
        </div>
        <CarouselControls
          current={current}
          total={totalSlides}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
        />
      </div>
    </section>
  );
};