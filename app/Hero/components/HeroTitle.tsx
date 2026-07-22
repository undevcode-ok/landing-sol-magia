"use client";

import { motion } from "framer-motion";
import { heroData } from "../data/hero.data";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export const HeroTitle = () => {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-[1.0] tracking-wide mb-7"
    >
      {heroData.title.map((text, i) => (
        <motion.span key={i} variants={lineVariants} className="block">
          {text}
        </motion.span>
      ))}
    </motion.h1>
  );
};