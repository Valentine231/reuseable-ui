"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DoubleClickHeart({ children }) {
  const [hearts, setHearts] = useState([]);

  const handleDoubleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const newHeart = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setHearts((prev) => [...prev, newHeart]);

    // remove after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 800);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="relative overflow-hidden"
    >
      {/* CONTENT */}
      {children}

      {/* HEARTS */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              position: "absolute",
              top: heart.y,
              left: heart.x,
              transform: "translate(-50%, -50%)",
            }}
            className="text-red-500 text-3xl pointer-events-none"
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}