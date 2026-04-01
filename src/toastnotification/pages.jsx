"use client";

import { useState } from "react";
import ToastContainer from "@/app/components/toast";
import { motion } from "framer-motion";

export default function ToastNotification() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    setToasts((prev) => [...prev, { id: Date.now(), message }]);

    // Auto remove after 3s
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.button
        onClick={() => addToast("🔥 Action successful!")}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Show Toast
      </motion.button>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}