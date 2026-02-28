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
          score += userAnswer * 50;
        } else {
          score -= userAnswer * 10;
        }
      } else if (question.targetFeature) {
        const clubFeatureValue = club[question.targetFeature] || -1;
        score += userAnswer * clubFeatureValue;
      }
    });

    return { ...club, score };
  });

  return scoredClubs
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 3);
};
