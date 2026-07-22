"use client";

import { motion } from "framer-motion";
import { data } from "../data/reed.data";

export const ReedImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex-shrink-0 overflow-hidden rounded-3xl"
    >
      <img
        src={data.img}
        alt={data.title}
        className="
          w-full
          h-[380px]
          sm:h-[450px]
          lg:w-[510px]
          lg:h-[550px]
          object-cover
          rounded-3xl
          block
          brightness-90
          contrast-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-white/10
          pointer-events-none
        "
      />
    </motion.div>
  );
};