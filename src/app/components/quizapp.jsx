"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuizStore } from "../store/usequizstore";
import { BlurryLoader } from "./blurryloader";

export default function Quiz() {
  const { questions, index, fetchQuestions, loading, error } =
    useQuizStore();

  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
  fetchQuestions();
}, [fetchQuestions]);

if (loading) return <BlurryLoader />;
if (error) return <p className="text-red-500">{error}</p>;
if (!questions.length) return <BlurryLoader />;


  const current = questions[index];

  if (!current) return null;

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === current.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);

    if (index + 1 < questions.length) {
      useQuizStore.setState({ index: index + 1 });
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      useQuizStore.setState({ index: index - 1 });
      setSelected(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-xl">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-lg font-bold mb-4 text-black">
              {current.question}
            </h2>

            <div className="space-y-3 text-black text-lg">
              {current.options.map((option) => {
                const isCorrect = option === current.answer;
                const isSelected = option === selected;

                return (
                  <motion.button
                    key={option}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-3 rounded-lg border text-left
                      ${
                        selected
                          ? isCorrect
                            ? "bg-green-200"
                            : isSelected
                            ? "bg-red-200"
                            : ""
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Prev
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {index + 1 === questions.length ? "Finish" : "Next"}
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Question {index + 1} of {questions.length}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-xl font-bold text-center">
              🎉 Your Score
            </h2>

            <p className="text-center text-2xl mt-4">
              {score} / {questions.length}
            </p>

            <button
              onClick={() => {
                setShowResult(false);
                setScore(0);
                setSelected(null);
                useQuizStore.setState({ index: 0 });
              }}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Restart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}