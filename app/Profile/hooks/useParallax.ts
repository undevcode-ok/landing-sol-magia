"use client";

import { useEffect, useRef } from "react";

export const useParallax = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewH = window.innerHeight;
      const offset = ((centerY - viewH / 2) / viewH) * 80;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { bgRef, sectionRef };
};