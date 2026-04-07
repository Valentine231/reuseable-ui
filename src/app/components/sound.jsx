"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function SoundButton({ label, sound }) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sound);
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <motion.button
      onClick={playSound}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
    >
      {label}
    </motion.button>
  );
}