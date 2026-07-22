"use client";

import { motion } from "framer-motion";
import { enemigosData } from "../data/enemigos.data";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const EnemigosText = () => {
  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="text-white text-4xl  lg:text-5xl xl:text-[52px] font-bold leading-[1.2] text-center"
      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
    >
      {enemigosData.lines.map((text, i) => (
        <motion.span key={i} variants={lineVariants} className="block">
          {text}
        </motion.span>
      ))}
    </motion.h2>
  );
};