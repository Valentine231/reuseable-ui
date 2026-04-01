"use client";

import { AnimatePresence } from "framer-motion";
import Toast from "./toaster";

export default function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}



