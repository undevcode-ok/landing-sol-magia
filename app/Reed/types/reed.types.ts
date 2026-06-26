export interface Rule {
  id: number;
  text: string;
  type: "no" | "yes";
  description?: string;
}

export interface reedData {
  eyebrow: string;
  title: string;
  description: string;
  rulesLeft: Rule[];
  rulesRight: Rule[];
}