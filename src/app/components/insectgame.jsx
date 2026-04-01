"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Insectgame = () => {
  const [score, setScore] = useState(0);
  const [insects, setInsects] = useState([]);

  const instecturl = [
  "https://pngimg.com/uploads/spider/spider_PNG12.png",
  "https://pngimg.com/uploads/ant/ant_PNG111.png",
  "https://pngimg.com/uploads/bee/bee_PNG11.png",
  "https://pngimg.com/uploads/fly/fly_PNG394.png",
  "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  "https://cdn-icons-png.flaticon.com/512/616/616408.png"
];


  return(
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white mb-6">Insect Clicker Game</h1>
      <div className="text-white text-xl mb-4">Score: {score}</div>
      <div className="relative w-full h-full">
        {insects.map((insect, index) => (
          <motion.img
            key={index}
            src={instecturl[Math.floor(Math.random() * instecturl.length)]}
            alt="insect"
            className="absolute w-16 h-16 cursor-pointer"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            onClick={() => {
              setScore(score + 1);
              setInsects(insects.filter((_, i) => i !== index));
            }}
          />
        ))}
      </div>
      <button
        onClick={() => setInsects([...insects, {}])}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Add Insect
      </button>
    </div>
  )

}



