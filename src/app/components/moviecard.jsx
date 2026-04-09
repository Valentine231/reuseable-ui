"use client";

import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />

      <div className="p-3">
        <h2 className="text-sm font-semibold">{movie.Title}</h2>
        <p className="text-gray-400 text-xs">{movie.Year}</p>
      </div>
    </motion.div>
  );
}