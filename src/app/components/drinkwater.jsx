"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaterApp() {
  const goal = 2000;
  const [water, setWater] = useState(0);

  const percent = Math.min((water / goal) * 100, 100);
  const isFull = water >= goal;

  const addWater = (amount) => {
    setWater((prev) => Math.min(prev + amount, goal));
  };

  const reset = () => setWater(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center space-y-5"
      >
        {/* Title */}
        <h1 className="text-xl font-bold text-blue-600">
          💧 Drink Water
        </h1>

        {/* Progress Circle */}
        <div className="relative w-40 h-40 mx-auto">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="transparent"
            />

            <motion.circle
              cx="80"
              cy="80"
              r="70"
              stroke="#3b82f6"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={440}
              animate={{
                strokeDashoffset: 440 - (440 * percent) / 100,
              }}
              transition={{ duration: 0.5 }}
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold">{water}ml</span>
            <span className="text-sm text-gray-500">
              {Math.round(percent)}%
            </span>
          </div>
        </div>

        {/* Goal */}
        <p className="text-gray-600 text-sm">
          Goal: {goal}ml
        </p>

        {/* 🎉 Completed State */}
        {isFull && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-semibold"
          >
            🎉 Goal Reached!
          </motion.p>
        )}

        {/* Buttons (hide when full) */}
        {!isFull && (
          <div className="flex justify-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addWater(250)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
            >
              +250ml
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addWater(500)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
            >
              +500ml
            </motion.button>
          </div>
        )}

        {/* Reset */}
        <button
          onClick={reset}
          className="text-red-500 text-sm hover:underline"
        >
          Reset
        </button>
      </motion.div>
    </div>
  );
}