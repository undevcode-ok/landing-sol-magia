"use client";

import { motion } from "framer-motion";
import { Referencia } from "../types/refence.types";

interface Props {
  referencia: Referencia;
  index?: number;
}

export const ReferenceCard = ({ referencia, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="bg-white/5 border border-white/10 rounded-[20px] p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-violet-500"
    >
      <div className="text-violet-300 text-lg  lg:text-2xl tracking-widest">★★★★★</div>
      <p className="text-white/80 text-xl leading-[1.65] italic flex-1">
        “{referencia.text}”
      </p>
      <div>
        <p className="text-white text-lg font-semibold">{referencia.name}</p>
      </div>
    </motion.div>
  );
};