 "use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Toast({ message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between gap-4"
    >
      <p>{message}</p>

      <button onClick={onClose}>
        <X size={18} />
      </button>
    </motion.div>
  );
 }