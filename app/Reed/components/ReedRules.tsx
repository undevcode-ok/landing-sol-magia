import { Rule } from "../types/reed.types";
import { RuleItem } from "./RuleItem";

interface Props {
  rules: Rule[];
  align?: "left" | "right";
}

export const ReedRules = ({ rules, align = "left" }: Props) => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      {rules.map((rule) => (
        <RuleItem key={rule.id} rule={rule} align={align} />
      ))}
    </div>
  );
};