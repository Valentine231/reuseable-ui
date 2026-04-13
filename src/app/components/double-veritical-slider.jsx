"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Nature",
    
    color: "bg-green-500",
    image: "https://picsum.photos/id/1015/600/800",
  },
  {
    title: "Fun-paddle ",
    color: "bg-blue-500",
    image: "https://picsum.photos/id/1011/600/800",
  },
  {
    title: "Weather",
    color: "bg-purple-500",
    image: "https://picsum.photos/id/1002/600/800",
  },
  {
    title: "mountains",
    color: "bg-yellow-500",
    image: "https://picsum.photos/id/1016/600/800",
  },
   {
    title: "Nature",
    id: 5,
    color: "bg-green-500",
    image: "https://picsum.photos/id/1019/600/800",
  },
   {
    title: "forces",
    id: 6,
    color: "bg-green-500",
    image: "https://picsum.photos/id/1021/600/800",
  }
];

export default function DoubleVerticalSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      
      {/* LEFT SIDE */}
      <div
        className="w-1/2 h-full transition-transform duration-700"
        style={{
          transform: `translateY(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-screen flex items-center justify-center text-white text-3xl ${slide.color}`}
          >
            {slide.title}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (REVERSED) */}
      <div
         className="w-1/2 h-full transition-transform duration-700"
  style={{
    transform: `translateY(-${
      (total - activeIndex - 1) * 100
    }%)`,
  }}
      >
        {[...slides].reverse().map((slide, index) => (
          <div key={index} className="h-screen relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute right-5 top-1/2 flex flex-col gap-2 z-10">
        <button
          onClick={prevSlide}
          className="bg-white text-black px-3 py-2 rounded"
        >
          ↑
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-black px-3 py-2 rounded"
        >
          ↓
        </button>
      </div>
    </div>
  );
}