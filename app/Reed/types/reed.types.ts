export interface Rule {
  id: number;
  text: string;
  type: "no" | "yes";
}

export interface reedData {
  title: string;
  description: string;
  img: string;
  rulesLeft: Rule[];
  rulesRight: Rule[];
}