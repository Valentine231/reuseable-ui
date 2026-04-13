"use client";

import PokemonCard from "./pokemoncard";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "../store/useGamestore";
import { useEffect } from "react";

export default function GameBoard() {
  const { pokemons, score, bestScore, handleClick, fetchPokemons } = useGameStore();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <>
      {/* SCORE */}
      <div className="flex justify-between mb-4">
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="grid grid-cols-3 md:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {pokemons.map((poke) => (
            <PokemonCard
              key={poke.id}
              poke={poke}
              onClick={() => handleClick(poke.id)} // ✅ clean
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}