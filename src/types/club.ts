export type Category =
  | "교양"
  | "공연예술"
  | "봉사"
  | "체육"
  | "학술"
  | "문예창작"
  | "종교";

export interface Club {
  id: number;
  name: string;
  location: string;
  description: string;
  category: Category | string;
}
