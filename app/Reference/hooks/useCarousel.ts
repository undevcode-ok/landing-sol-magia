"use client";

import { useState, useCallback } from "react";
import { referencias } from "../data/reference.data";

export const useCarousel = () => {
  const total = referencias.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  return { current, total, direction, next, prev, goTo };
};