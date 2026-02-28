export type Category =
  | "교양"
  | "공연예술"
  | "봉사"
  | "체육"
  | "학술"
  | "문예창작"
  | "종교";

export interface Question {
  id: number;
  text: string;
  targetCategory?: Category;
  targetFeature?:
    | "isOnlyEnglish"
    | "hasSarang"
    | "hasDan"
    | "isFloor4"
    | "isFloor5"
    | "isBallSport"
    | "isRacketSport"
    | "hasGrowthKeyword"
    | "hasMusicKeyword";
}

export interface Club {
  id: number;
  name: string;
  location: string;
  description: string;
  category: Category | string;

  // 가중치 매핑 데이터 (해당하면 1, 아니면 -1)
  isOnlyEnglish: number;
  hasSarang: number;
  hasDan: number;
  isFloor4: number;
  isFloor5: number;
  isBallSport: number;
  isOnlyKorean: number;
  isShortName: number;
  isRacketSport: number;
  hasGrowthKeyword: number;
  hasMusicKeyword: number;
}
