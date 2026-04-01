"use client";

import { motion } from "framer-motion";

export default function HoverCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-72 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white cursor-pointer"
      >
        <h2 className="text-xl font-semibold mb-2">
           Hover Card
        </h2>

        <p className="text-sm text-white/70">
          Move your mouse over this card to see the smooth animation effect.
        </p>
      </motion.div>
    </div>
  );
}