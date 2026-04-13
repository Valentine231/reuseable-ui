"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ThreeDBox() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientY - rect.top;
    const y = e.clientX - rect.left;

    const midX = rect.height / 2;
    const midY = rect.width / 2;

    const rotateX = ((x - midX) / midX) * 15;
    const rotateY = ((y - midY) / midY) * 15;

    setRotate({
      x: -rotateX,
      y: rotateY,
    });
  };

  const reset = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      
      {/* Perspective Wrapper */}
      <div style={{ perspective: "1000px" }}>
        
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-xl font-bold"
        >
          3D Box
        </motion.div>

      </div>
    </div>
  );
}