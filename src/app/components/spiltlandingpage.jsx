"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SplitLanding() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <motion.div
        onHoverStart={() => setHovered("left")}
        onHoverEnd={() => setHovered(null)}
        animate={{
          flex: hovered === "left" ? 2 : 1,
        }}
        className="flex items-center justify-center bg-green-600 text-white cursor-pointer"
      >
        <h1 className="text-3xl font-bold">Frontend</h1>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        onHoverStart={() => setHovered("right")}
        onHoverEnd={() => setHovered(null)}
        animate={{
          flex: hovered === "right" ? 2 : 1,
        }}
        className="flex items-center justify-center bg-yellow-800 text-green-600 outline-purple-600 cursor-pointer"
      >
        <h1 className="text-3xl font-bold">Backend</h1>
      </motion.div>
    </div>
  );
}