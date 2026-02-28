import { create } from "zustand";
import type { Answers } from "../utils/engine";
import { QUIZ_QUESTIONS } from "../constants/questions";

interface QuizState {
  step: "intro" | "quiz" | "result";
  currentStepIndex: number;
  history: number[];
  answers: Answers;

  setAnswer: (questionId: number, score: number) => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  step: "intro",
  currentStepIndex: 0,
  history: [],
  answers: {},

  setAnswer: (questionId, score) => {
    set((state) => {
      const newAnswers = { ...state.answers, [questionId]: score };
      const currentQuestion = QUIZ_QUESTIONS.find((q) => q.id === questionId);

      let nextIndex = state.currentStepIndex + 1;

      if (currentQuestion?.targetCategory && score > 0) {
        nextIndex = 7;
      }

      if (questionId === 8 && score > 0) {
        nextIndex = 11;
      }

      if (questionId === 14 && (!newAnswers[4] || newAnswers[4] <= 0)) {
        nextIndex = 16;
      }

      if (questionId === 16 && newAnswers[4] > 0) {
        nextIndex = 18;
      }

      if (nextIndex > 17) {
        return {
          answers: newAnswers,
          step: "result",
          history: [...state.history, state.currentStepIndex],
        };
      }

      return {
        answers: newAnswers,
        currentStepIndex: nextIndex,
        history: [...state.history, state.currentStepIndex],
      };
    });
  },
  prevQuestion: () => {
    set((state) => {
      if (state.history.length === 0) return state;
      const newHistory = [...state.history];
      const prevIndex = newHistory.pop()!;
      return { currentStepIndex: prevIndex, history: newHistory };
    });
  },

  resetQuiz: () => {
    set({ step: "intro", currentStepIndex: 0, history: [], answers: {} });
  },
}));
