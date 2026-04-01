"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchForm({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    onSearch(username);
    setUsername("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex gap-2"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 rounded bg-gray-800 text-white outline-none"
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="px-4 bg-blue-500 text-white rounded"
      >
        Search
      </motion.button>
    </motion.form>
  );
}