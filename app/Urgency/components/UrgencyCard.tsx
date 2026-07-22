"use client";

import { motion } from "framer-motion";
import { urgencyData } from "../data/urgency.data";



export const UrgencyCard = () => {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        group
        overflow-hidden
        rounded-3xl
        w-full
        max-w-7xl
        mx-auto
        bg-zinc-900
        border
        border-transparent
        shadow-lg
        shadow-black/40
        transition-colors
        duration-300
        hover:border-violet-500
      "
    >
      <div className="flex flex-col md:flex-row">
        <div className="overflow-hidden md:w-[360px] shrink-0">
          <img
            src={urgencyData.img}
            alt={urgencyData.title}
            className="
              w-full
              h-80
              min-h-[320px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 md:px-10 md:py-10">
          <h3 className="font-secondary min-h-[64px] flex  text-violet-300 text-2xl font-semibold text-center uppercase">
            {urgencyData.title}
          </h3>

          <p className="text-zinc-300 mb-8 text-xl sm:text-xl lg:text-2xlfont-bold max-w-4xl leading-8">
            {urgencyData.shortDesc}
          </p>

          
        </div>
      </div>
    </motion.div>
  );
};