"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useJokeStore } from "../store/usedadjokes";
import { useEffect } from "react";

export default function JokeCard() {
  const { joke, loading, fetchJoke, addFavorite } = useJokeStore();

  useEffect(() => {
    fetchJoke();
  }, []);

  // console.log(joke)



  return (
    <div className="bg-white text-black p-6 mx-auto my-30 rounded-xl shadow-xl max-w-md w-full text-center">
      
      {/* JOKE DISPLAY */}
     <AnimatePresence mode="wait">
  {loading ? (
    <p key="loading">Loading... 😅</p>
  ) : (
    joke && (
      <motion.div
        key={joke.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg font-semibold">{joke.text}</p>
      </motion.div>
    )
  )}
  
</AnimatePresence>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6 justify-center">
        <button
          onClick={fetchJoke}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          New Joke 😂
        </button>

        <button
          onClick={addFavorite}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          ❤️ Save
        </button>
      </div>
    </div>
  );
}