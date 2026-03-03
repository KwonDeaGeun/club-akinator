import { create } from "zustand";
import { QUIZ_TREE } from "../constants/tree";

interface QuizState {
  step: "intro" | "quiz" | "result";
  currentNodeId: string;
  history: string[];
  resultClubs: string[];

  setAnswer: (answer: "yes" | "no") => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  step: "intro",
  currentNodeId: "Q1",
  history: [],
  resultClubs: [],

  setAnswer: (answer) => {
    set((state) => {
      const currentNode = QUIZ_TREE[state.currentNodeId];
      if (!currentNode) {
        return state;
      }
      const nextStep = currentNode[answer];
      if (!nextStep) {
        return state;
      }

      if (Array.isArray(nextStep)) {
        return {
          step: "result",
          resultClubs: nextStep,
          history: [...state.history, state.currentNodeId],
        };
      }

      return {
        currentNodeId: nextStep,
        history: [...state.history, state.currentNodeId],
      };
    });
  },

  prevQuestion: () => {
    set((state) => {
      if (state.history.length === 0) return state;
      const newHistory = [...state.history];
      const prevNodeId = newHistory.pop()!;

      return {
        step: "quiz",
        currentNodeId: prevNodeId,
        history: newHistory,
        resultClubs: [],
      };
    });
  },

  resetQuiz: () => {
    set({ step: "intro", currentNodeId: "Q1", history: [], resultClubs: [] });
  },
}));
