"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = ["Account", "Profile", "Confirm"];

export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-10">
      {/* Steps */}
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              
              {/* LINE */}
              {index !== steps.length - 1 && (
                <div className="absolute top-4 left-1/2 w-full h-1 bg-gray-300 z-0">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: isCompleted ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}

              {/* CIRCLE */}
              <motion.div
                className={`z-10 w-8 h-8 flex items-center justify-center rounded-full text-white
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                    ? "bg-blue-500"
                    : "bg-gray-400"
                }`}
                animate={{
                  scale: isActive ? 1.2 : 1,
                }}
              >
                {index + 1}
              </motion.div>

              {/* LABEL */}
              <p className="mt-2 text-sm text-gray-700">{step}</p>
            </div>
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Back
        </button>

        <button
          onClick={() =>
            setCurrentStep((prev) =>
              Math.min(prev + 1, steps.length - 1)
            )
          }
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}