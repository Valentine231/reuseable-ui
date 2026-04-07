"use client";

import { useState } from "react";
import Clock from "@/app/components/clock";
import { motion } from "framer-motion";

export default function ClockTime() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-6 px-4 py-2 rounded-lg border"
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      {/* Clock Card */}
      <motion.div
        layout
        className={`p-10 rounded-3xl shadow-2xl ${
          dark ? "bg-white/10 backdrop-blur-lg" : "bg-gray-100"
        }`}
      >
        <Clock />
      </motion.div>
    </div>
  );
}