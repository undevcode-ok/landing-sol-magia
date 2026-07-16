"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const COLLAPSED_HEIGHT_PX = 102; // ~3 líneas con text-xl leading-[1.7]

export const useExpandableText = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setCanExpand(el.scrollHeight > COLLAPSED_HEIGHT_PX + 1);
  }, []);

  const toggle = useCallback(() => setIsExpanded((prev) => !prev), []);

  return { textRef, isExpanded, canExpand, toggle, COLLAPSED_HEIGHT_PX };
};