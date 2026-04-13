"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    text: "This product completely changed how I work. Super clean and fast!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI Designer",
    text: "The animations and user experience are just top-notch 🔥",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Software Engineer",
    text: "I love how simple yet powerful everything feels.",
    image: "https://i.pravatar.cc/150?img=3",
  },
   {
    id: 4,
    name: "Tino  Johnson",
    role: "Software Engineer",
    text: "Framer Motion makes it so easy to create smooth animations. Highly recommend it!",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "moses  Johnson",
    role: "ACCOUNTANT",
    text: "Numbers don't lie, and this product is a game-changer for my workflow. It's efficient and reliable.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function TestimonialSwitcher() {
  const [index, setIndex] = useState(0);

  // AUTO SWITCH
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="max-w-md mx-auto my-30 p-6 bg-gray-900 text-white rounded-xl text-center">
      <h1 className="text-xl font-bold mb-6">💬 Testimonials</h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* IMAGE */}
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* TEXT */}
          <p className="mb-4 text-gray-300">"{current.text}"</p>

          {/* NAME */}
          <h3 className="font-semibold">{current.name}</h3>
          <p className="text-sm text-gray-400">{current.role}</p>
        </motion.div>
      </AnimatePresence>

      {/* CONTROLS */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}