"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RandomPicker() {
  const [input, setInput] = useState("");
  const [choice, setChoice] = useState("");

  // SPLIT INPUT INTO ARRAY
  const getChoices = () => {
    return input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  };

  // PICK RANDOM
  const pickRandom = () => {
    const choices = getChoices();

    if (choices.length === 0) return;

    const randomIndex = Math.floor(Math.random() * choices.length);
    setChoice(choices[randomIndex]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-4">
        🎯 Random Choice Picker
      </h1>

      {/* INPUT */}
      <textarea
        placeholder="Enter choices (comma separated)... e.g pizza, burger, rice"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 rounded bg-gray-800 outline-none mb-4"
        rows={3}
      />
      <div className="flex flex-wrap gap-2 mb-4">
  {getChoices().map((item, index) => (
    <span
      key={index}
      className="bg-gray-700 px-2 py-1 rounded text-sm"
    >
      {item}
    </span>
  ))}
</div>

      {/* BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={pickRandom}
        className="w-full bg-blue-500 py-3 rounded mb-4"
      >
        Pick Random 🎲
      </motion.button>

      {/* RESULT */}
      {choice && (
        <motion.div
          key={choice}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-green-500 text-black py-3 rounded font-bold"
        >
          {choice}
        </motion.div>
      )}
    </div>
  );
}