"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const AnimatedNavigation = () => {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navitems = ["home", "about", "services", "contact"];

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="relative">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white mb-4"
        >
          ☰
        </button>

        {/* NAV */}
        <div
          className={`flex flex-col md:flex-row gap-3 md:gap-6 p-3 rounded-2xl 
          backdrop-blur-md bg-white/10 border w-full border-white/20 shadow-lg
          ${isOpen ? "flex" : "hidden md:flex"}`}
        >
          {navitems.map((item) => (
            <div
              key={item}
              className="relative px-4 py-2 cursor-pointer text-white"
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover FOLLOW effect */}
              {hovered === item && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              {/* Text */}
              <span className="relative z-10 capitalize">{item}</span>

              {/* 💧 LIQUID UNDERLINE (FIXED) */}
              {active === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white rounded-full"
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                    },
                  }}
                  animate={{
                    y: [0, -1, 0], // subtle bounce = premium feel
                  }}
                  style={{
                    transformOrigin: "center",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};