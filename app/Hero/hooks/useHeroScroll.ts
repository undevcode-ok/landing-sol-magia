"use client";

export const useHeroScroll = () => {
  const handleScroll = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { handleScroll };
};