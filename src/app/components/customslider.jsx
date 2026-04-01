"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export const RangeSlider = ({ min = 0, max = 100 }) => {
  const [value, setValue] = useState(50);
  const trackRef = useRef(null);

  const handleDrag = (e, info) => {
    const rect = trackRef.current.getBoundingClientRect();
    let newX = info.point.x - rect.left;

    // clamp within track
    newX = Math.max(0, Math.min(newX, rect.width));

    const percent = newX / rect.width;
    const newValue = Math.round(min + percent * (max - min));

    setValue(newValue);
  };

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      
      {/* Value */}
      <p className="text-white mb-2">{value}</p>

      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-2 bg-gray-700 rounded-full"
      >
        {/* Filled Track */}
        <div
          className="absolute h-full bg-blue-500 rounded-full"
          style={{ width: `${percent}%` }}
        />

        {/* Thumb */}
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          onDrag={handleDrag}
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full cursor-pointer shadow-lg"
          style={{ left: `${percent}%`, translateX: "-50%" }}
          whileTap={{ scale: 1.2 }}
        />
      </div>
    </div>
  );
};