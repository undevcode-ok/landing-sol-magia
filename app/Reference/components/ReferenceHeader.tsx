"use client";

import { useRef, useEffect, useState } from "react";

export const ReferenceHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center mb-10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <p className="text-2xl tracking-[0.4em] uppercase text-[#b8860b]/60 mb-3">
        Testimonios
      </p>
      <h2
        className="text-white text-8xl font-light leading-tight mb-3"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        Lo que dicen mis consultantes
      </h2>
      <p className="text-white/35 text-2xl tracking-widest uppercase">
        Eficacia y trayectoria verificables en historias de Instagram
      </p>
      <div className="w-8 h-[1px] bg-[#c0392b] mx-auto mt-5" />
    </div>
  );
};