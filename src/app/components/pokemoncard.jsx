"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PokemonCard({ poke, onClick }) {

    
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white text-black p-4 rounded-xl shadow cursor-pointer"
    >
      <Image src={poke.image} alt={poke.name} width={200} height={200} />
      <p className="text-center capitalize">{poke.name}</p>
    </motion.div>
  );
}