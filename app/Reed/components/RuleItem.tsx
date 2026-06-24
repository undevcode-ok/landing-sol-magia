import { Rule } from "../types/reed.types";

interface Props {
  rule: Rule;
  align?: "left" | "right";
}

export const RuleItem = ({ rule, align = "left" }: Props) => {
  const isRight = align === "right";

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors flex-1 ${
        isRight ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div
        className={`w-[34px] min-w-[34px] h-[34px] rounded-full flex items-center justify-center text-[14px] font-bold ${
          rule.type === "no"
            ? "bg-[rgba(240,96,96,0.2)] border border-[rgba(240,96,96,0.6)] text-[#f06060]"
            : "bg-[rgba(61,214,140,0.15)] border border-[rgba(61,214,140,0.5)] text-[#3dd68c]"
        }`}
      >
        {rule.type === "no" ? "✕" : "✓"}
      </div>
      <span className="text-white/90 text-xl leading-snug">{rule.text}</span>
    </div>
  );
};