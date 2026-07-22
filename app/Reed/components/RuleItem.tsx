"use client";

import { motion } from "framer-motion";
import { Rule } from "../types/reed.types";

interface Props {
  rule: Rule;
  align?: "left" | "right";
  index?: number;
}

export const RuleItem = ({ rule, align = "left", index = 0 }: Props) => {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`
        group
        cursor-pointer
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-3xl
       bg-zinc-900
       border
    border-violet-800/40
        px-5
        py-4
        shadow-lg
    shadow-black/40
        transition-colors
        duration-300
        hover:border-violet-500

        ${
          isRight
            ? "flex-row-reverse text-right"
            : ""
        }
      `}
    >
      <div
        className={`
          flex
          h-11
          w-11
          min-w-11
          items-center
          justify-center
          rounded-full
          text-base
          font-bold
          transition-all
          duration-300
          ${
            rule.type === "no"
              ? "bg-red-500/15 text-white border border-white/20"
              : "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
          }
        `}
      >
        {rule.type === "no" ? "✕" : "✓"}
      </div>

      <span
        className="
          text-lg
          leading-relaxed
          font-medium
          text-white
        "
      >
        {rule.text}
      </span>
    </motion.div>
  );
};