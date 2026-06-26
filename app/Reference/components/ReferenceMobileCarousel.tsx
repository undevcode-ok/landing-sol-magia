"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { referencias } from "../data/reference.data";
import { useSwipe } from "../hooks/useSwipe";

export const ReferenceMobileCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hintVisible, setHintVisible] = useState(true);
  const total = referencias.length;

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + total) % total);
    setHintVisible(false);
  }, [total]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const { onTouchStart, onTouchEnd, onMouseDown, onMouseUp, onMouseLeave } = useSwipe(next, prev);

  const ref = referencias[current];

  const variants = {
    enter:  (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="w-full flex flex-col bg-[#0f0202]" style={{ height: "100svh" }}>
      {/* Header */}
      <div className="text-center px-6 pt-8 pb-5 flex-shrink-0">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8860b]/60 mb-2">
          Referencias
        </p>
        <h2 className="text-white text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          Lo que dicen
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={ref.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={ref.avatar}
              alt={ref.name}
              fill
              className="object-cover object-top select-none"
              sizes="100vw"
              priority={current === 0}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-16 left-0 right-0 px-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8860b]/80 mb-2">
                {ref.service}
              </p>
              <div className="text-[#c0392b] text-sm tracking-widest mb-3">★★★★★</div>
              <p className="text-white/85 text-base leading-[1.7] italic mb-4">
                "{ref.text}"
              </p>
              <p className="text-white text-lg font-semibold">{ref.name}</p>
              <p className="text-white/40 text-xs tracking-wide mt-0.5">{ref.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe hint */}
        <AnimatePresence>
          {hintVisible && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase text-white/25 pointer-events-none"
            >
              Deslizá para ver más
            </motion.p>
          )}
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {referencias.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Ir a referencia ${i + 1}`}
              className={`w-[5px] h-[5px] rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === current ? "bg-[#c0392b] scale-125" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};