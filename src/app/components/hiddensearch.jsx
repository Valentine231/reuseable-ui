"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function HiddenSearch() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setOpen((prev) => !prev);
  };

  // focus when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // close with ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
     
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={false}
        animate={{ width: open ? 280 : 50 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center bg-white rounded-full shadow-lg px-4 "
      >
        {/* ICON BUTTON */}
        <button
          onClick={toggleSearch}
          className="p-2 text-black font-bold"
        >
          {open ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* INPUT */}
        <AnimatePresence>
          {open && (
            <motion.input
              ref={inputRef}
              key="input"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-black ml-2 w-full"
              onBlur={() => setOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}