"use client";

import { useState } from "react";
import { useMovieStore } from "../store/usemoviestore";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const fetchMovies = useMovieStore((state) => state.fetchMovies);

  const handleSearch = () => {
    if (!input) return;
    fetchMovies(input);
  };

  return (
    <div className="flex gap-2 mb-6">
      <motion.input
        whileFocus={{ scale: 1.05 }}
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-3 rounded bg-gray-800 outline-none"
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleSearch}
        className="bg-blue-500 px-4 rounded"
      >
        Search
      </motion.button>
    </div>
  );
}