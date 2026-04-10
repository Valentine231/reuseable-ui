"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RandomImage() {
  const generateRandom = () => Math.floor(Math.random() * 1000);

  const [image, setImage] = useState(
    `https://picsum.photos/400?random=${generateRandom()}`
  );

  const generateImage = () => {
    const random = generateRandom();

    setImage(`https://picsum.photos/400?random=${random}`);
  };

  return (
    <div className="max-w-md mx-auto my-30 p-6 bg-gray-900 text-white rounded-xl">
      <h1 className="text-xl  text-center font-bold font-sans mb-4">
        🖼️ Random Image Generator
      </h1>

      {/* IMAGE */}
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={image}
              alt="Random"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 0.9 }}
        onClick={generateImage}
        className="w-full bg-blue-500 py-3 rounded"
      >
        Generate New Image
      </motion.button>
    </div>
  );
}