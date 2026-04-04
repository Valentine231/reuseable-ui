"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackCard() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!rating) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-80 text-white shadow-xl"
          >
            <h2 className="text-lg font-semibold mb-4">
              How was your experience?
            </h2>

            {/* ⭐ Rating */}
            <div className="flex gap-3 mb-4 justify-center">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    rating >= num
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-700"
                  }`}
                >
                  {num}
                </motion.button>
              ))}
            </div>

            {/* Message */}
            <textarea
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white outline-none mb-4"
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="w-full py-2 bg-blue-500 rounded-lg"
            >
              Submit
            </motion.button>
          </motion.div>
        ) : (
          /*  Success State */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-80 text-white text-center"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xl font-semibold mb-2"
            >
               Thank You!
            </motion.h2>

            <p className="text-gray-300">
              You rated us {rating}/5
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}