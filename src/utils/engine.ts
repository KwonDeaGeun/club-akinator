import type { Club } from "../types/club";
import { QUIZ_QUESTIONS } from "../constants/questions";

export type Answers = Record<number, number>;

export const calculateRecommendations = (
  answers: Answers,
  clubs: Club[],
): Club[] => {
  const scoredClubs = clubs.map((club) => {
    let score = 0;

    QUIZ_QUESTIONS.forEach((question) => {
      const userAnswer = answers[question.id] || 0;
      if (userAnswer === 0) return;

      if (question.targetCategory) {
        if (club.category === question.targetCategory) {
          // 분과 일치 시 압도적 점수
          score += userAnswer * 50;
        } else {
          // 다른 분과는 감점
          score -= userAnswer * 10;
        }
      } else if (question.targetFeature) {
        // 특징(Feature) 일치 여부 계산
        const clubFeatureValue = club[question.targetFeature] || -1;
        score += userAnswer * clubFeatureValue;
      }
    });

    return { ...club, score };
  });

  // 점수 내림차순 정렬 후 Top 3 반환
  return scoredClubs
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 3);
};
