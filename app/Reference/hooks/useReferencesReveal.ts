"use client";

import { useState } from "react";
import { referencias } from "../data/reference.data";

const INITIAL_COUNT = 3;

export const useReferencesReveal = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleRefs = referencias.slice(0, INITIAL_COUNT);
  const hiddenRefs = referencias.slice(INITIAL_COUNT);
  const hasMore = hiddenRefs.length > 0;

  const toggle = () => setShowAll((prev) => !prev);

  return { visibleRefs, hiddenRefs, showAll, hasMore, toggle };
};