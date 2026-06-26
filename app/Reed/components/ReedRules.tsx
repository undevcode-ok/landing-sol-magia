import { Rule } from "../types/reed.types";
import { RuleItem } from "./RuleItem";

interface Props {
  rules: Rule[];
}

export const ReedRules = ({ rules }: Props) => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full">
      {rules.map((rule, index) => (
        <RuleItem key={rule.id} rule={rule} index={index} />
      ))}
    </div>
  );
};