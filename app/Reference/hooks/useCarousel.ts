"use client";

import { useState } from "react";
import { referencias, SLIDE_SIZE } from "../data/reference.data";

export const useCarousel = () => {
  const totalSlides = Math.ceil(referencias.length / SLIDE_SIZE);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goTo = (index: number) => setCurrent(index);

  const currentRefs = referencias.slice(
    current * SLIDE_SIZE,
    current * SLIDE_SIZE + SLIDE_SIZE
  );

  return { current, totalSlides, currentRefs, next, prev, goTo };
};