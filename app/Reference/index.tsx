"use client";

import { useCarousel } from "./hooks/useCarousel";
import { ReferenceHeader } from "./components/ReferenceHeader";
import { ReferenceCard } from "./components/ReferenceCard";
import { CarouselControls } from "./components/CarouselControl";

export const Reference = () => {
  const { current, totalSlides, currentRefs, next, prev, goTo } = useCarousel();

  return (
    <section
      className="py-[72px] px-12 flex flex-col items-center gap-12"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #8b1a1a 0%, #3a0808 40%, #0d0303 100%)",
      }}
    >
      <ReferenceHeader />
      <div className="w-full max-w-[1000px]">
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