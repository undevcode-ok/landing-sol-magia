"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./components/HeroBackground";
import { HeroTagline } from "./components/HeroTagline";
import { HeroTitle } from "./components/HeroTitle";
import { HeroDescription } from "./components/HeroDescription";
import { HeroScrollButton } from "./components/HeroScrollButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-[2] text-center px-6 pt-24 sm:pt-32 md:pt-45 pb-16 max-w-[860px] mx-auto"
      >
        <motion.div variants={item}>
          <HeroTagline />
        </motion.div>
        <HeroTitle />
        <motion.div variants={item}>
          <HeroDescription />
        </motion.div>
        <motion.div variants={item}>
          <HeroScrollButton />
        </motion.div>
      </motion.div>
    </section>
  );
};