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
    | "isOnlyKorean"
    | "hasSarang"
    | "hasDan"
    | "isShortName"
    | "isFloor4"
    | "isFloor5"
    | "isBallSport"
    | "isRacketSport"
    | "hasGrowthKeyword"
    | "hasMusicKeyword";
}

export const QUIZ_QUESTIONS: Question[] = [
  // 1~7번: 분과 확정 (기존 동일)
  { id: 1, text: "교양 분과 소속인가요?", targetCategory: "교양" },
  { id: 2, text: "공연예술 분과 소속인가요?", targetCategory: "공연예술" },
  { id: 3, text: "봉사 분과 소속인가요?", targetCategory: "봉사" },
  { id: 4, text: "체육 분과 소속인가요?", targetCategory: "체육" },
  { id: 5, text: "학술 분과 소속인가요?", targetCategory: "학술" },
  { id: 6, text: "문예창작 분과 소속인가요?", targetCategory: "문예창작" },
  { id: 7, text: "종교 분과 소속인가요?", targetCategory: "종교" },

  // 8~12번: 이름 관련 필터링 (NEW)
  {
    id: 8,
    text: "동아리 이름이 영어 알파벳으로만 이루어져 있나요?",
    targetFeature: "isOnlyEnglish",
  },
  {
    id: 9,
    text: "동아리 이름이 한글로만 이루어져 있나요? (영어 혼용 X)",
    targetFeature: "isOnlyKorean",
  },
  {
    id: 10,
    text: "동아리 이름에 '사랑'이라는 단어가 들어가나요?",
    targetFeature: "hasSarang",
  },
  {
    id: 11,
    text: "동아리 이름에 '단' 자가 들어가나요?",
    targetFeature: "hasDan",
  },
  {
    id: 12,
    text: "동아리 이름이 3글자 이하로 짧은 편인가요? (예: 점자리, 글그림 등)",
    targetFeature: "isShortName",
  },

  // 13~14번: 위치 필터링
  {
    id: 13,
    text: "동아리방 위치가 혜당관 4층에 있나요?",
    targetFeature: "isFloor4",
  },
  {
    id: 14,
    text: "동아리방 위치가 혜당관 5층에 있나요?",
    targetFeature: "isFloor5",
  },

  // 15~16번: 스포츠 종목 필터링 (체육 전용)
  {
    id: 15,
    text: "농구, 축구, 야구 등 큰 공을 다루는 팀 스포츠와 관련이 있나요?",
    targetFeature: "isBallSport",
  },
  {
    id: 16,
    text: "배드민턴, 테니스, 탁구, 스쿼시 등 라켓을 사용하는 스포츠인가요?",
    targetFeature: "isRacketSport",
  },

  // 17~18번: 핵심 키워드 필터링
  {
    id: 17,
    text: "찾으시는 동아리의 주요 키워드가 '학습', '성장', '연구'와 관련이 있나요?",
    targetFeature: "hasGrowthKeyword",
  },
  {
    id: 18,
    text: "찾으시는 동아리의 주요 키워드가 '음악', '노래', '밴드'와 관련이 있나요?",
    targetFeature: "hasMusicKeyword",
  },
];
