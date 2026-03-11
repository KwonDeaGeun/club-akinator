export interface TreeNode {
  id: string;
  text: string;
  yes: string | string[];
  no: string | string[];
}

export const QUIZ_TREE: Record<string, TreeNode> = {
  Q1: {
    id: "Q1",
    text: "주된 활동이 스포츠·체력 단련인가요?",
    yes: "Q10",
    no: "Q2",
  },
  Q2: { id: "Q2", text: "종교 기반인가요?", yes: "Q15_1", no: "Q3" },
  Q3: { id: "Q3", text: "정기 공연/무대가 있나요?", yes: "Q8", no: "Q4" },
  Q4: { id: "Q4", text: "사회봉사가 핵심인가요?", yes: "Q11_D", no: "Q5" },

  Q10: {
    id: "Q10",
    text: "적어도 3인 이상의 구기 종목인가요?",
    yes: [
      "ACE",
      "PANDAS(야구부)",
      "피닉스(Phoenix)",
      "KODIAK BEARS",
      "STEP",
      "단웅즈",
    ],
    no: "Q10_2",
  },
  Q10_2: {
    id: "Q10_2",
    text: "무술/도 계열인가요?",
    yes: ["무혼(武魂)", "검도부", "우르스"],
    no: "Q10_3",
  },
  Q10_3: {
    id: "Q10_3",
    text: "라켓 스포츠인가요?",
    yes: ["FLY", "위너스(WINNERS)", "단쿼시", "DKUTC"],
    no: ["DKUAC", "요트부(DKYC)", "DKRC", "Onelove(원러브)", "스플릿", "Dans"],
  },

  Q15_1: {
    id: "Q15_1",
    text: "불교 계열인가요?",
    yes: ["불교학생회"],
    no: "Q15_2",
  },
  Q15_2: {
    id: "Q15_2",
    text: "가톨릭인가요?",
    yes: ["가톨릭학생회"],
    no: "Q15_3",
  },
  Q15_3: {
    id: "Q15_3",
    text: "선교 중심인가요?",
    yes: ["CCC(한국대학생선교회)", "JOY 선교회"],
    no: ["네비게이토 선교회"],
  },

  Q8: { id: "Q8", text: "음악 연주가 중심인가요?", yes: "Q8_2", no: "Q9" },
  Q8_2: { id: "Q8_2", text: "합창인가요?", yes: ["다솜합창단"], no: "Q8_3" },
  Q8_3: {
    id: "Q8_3",
    text: "락/밴드 중심인가요?",
    yes: ["블랙베어즈", "MUSE", "자드락"],
    no: ["가객", "모닥불"],
  },
  Q9: {
    id: "Q9",
    text: "춤 중심인가요?",
    yes: ["NRSC", "illecebra(일레케브라)", "ASTER아스테르)"],
    no: ["극예술연구회", "(DANSA)"],
  },

  Q11_D: {
    id: "Q11_D",
    text: "교육 관련 봉사인가요?",
    yes: "Q11_D_1",
    no: "Q11_D_2",
  },
  Q11_D_1: {
    id: "Q11_D_1",
    text: "어린이를 대상으로 하나요?",
    yes: ["아이사랑"],
    no: ["은가비", "Aegis"],
  },
  Q11_D_2: {
    id: "Q11_D_2",
    text: "동물 보호 관련인가요?",
    yes: ["미소"],
    no: "Q11_D_3",
  },
  Q11_D_3: {
    id: "Q11_D_3",
    text: "국제/UN 관련인가요?",
    yes: ["UNSA 단국지회"],
    no: ["단비", "선우리"],
  },

  Q5: {
    id: "Q5",
    text: "IT·프로그래밍 관련인가요?",
    yes: ["DCC", "Aegis", "CAGI"],
    no: "Q6",
  },
  Q6: {
    id: "Q6",
    text: "경제·투자·창업 관련인가요?",
    yes: ["금융투자연구회 IF", "Enactus DKU", "SUMMIT", "광고친구"],
    no: "Q7",
  },
  Q7: {
    id: "Q7",
    text: "외국어 학습 중심인가요?",
    yes: ["Newsweek 연구회", "일본어회화반", "ECC"],
    no: "Q12",
  },
  Q12: { id: "Q12", text: "천문/과학 탐구인가요?", yes: ["별사랑"], no: "Q13" },
  Q13: {
    id: "Q13",
    text: "게임 관련인가요?",
    yes: ["놀이사랑", "M.O.D.E", "Aegis"],
    no: "Q11_E",
  },
  Q11_E: {
    id: "Q11_E",
    text: "전통 문화 활동인가요?",
    yes: ["화경다회", "단국서예회"],
    no: "Q14",
  },
  Q14: {
    id: "Q14",
    text: "사진·시각 자료 창작인가요?",
    yes: ["사진예술연구회", "글그림", "영화예술연구회(FACE)"],
    no: "Q15_E",
  },
  Q15_E: {
    id: "Q15_E",
    text: "커피·음료 문화인가요?",
    yes: ["에스프레시보(Espres'sivo)"],
    no: ["점자리", "단냥펀치"],
  },
};
