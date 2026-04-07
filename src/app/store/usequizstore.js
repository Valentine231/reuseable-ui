

import { create } from "zustand";
import axios from "axios";

export const useQuizStore = create((set) => ({
  questions: [],
  index: 0,
  score: 0,
  answers: [],
  loading: false,
  error: null,

  //  FETCH QUESTIONS
  fetchQuestions: async () => {
  try {
    set({ loading: true });

    const res = await axios.get(
      "https://opentdb.com/api.php?amount=5&type=multiple"
    );

    const formatted = res.data.results.map((q) => ({
      question: q.question,
      options: [
        ...q.incorrect_answers,
        q.correct_answer,
      ].sort(() => Math.random() - 0.5),
      answer: q.correct_answer,
    }));

    set({
      questions: formatted,
      loading: false,
    });
  } catch (err) {
    set({
      error: "Failed to fetch",
      loading: false,
    });
  }
},

  nextQuestion: () =>
    set((state) => ({
      index: state.index + 1,
    })),

  prevQuestion: () =>
    set((state) => ({
      index: state.index > 0 ? state.index - 1 : 0,
    })),

  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),

  reset: () =>
    set({
      index: 0,
      score: 0,
      answers: [],
    }),
}));

// 🔧 helper
function decodeHTML() {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}