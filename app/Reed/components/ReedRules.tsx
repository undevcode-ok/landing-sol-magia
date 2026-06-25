import { Rule } from "../types/reed.types";
import { RuleItem } from "./RuleItem";

interface Props {
  rules: Rule[];
 
}

export const ReedRules = ({ rules }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {rules.map((rule) => (
        <RuleItem
          key={rule.id}
          rule={rule}
        />
      ))}
    </div>
  );
};