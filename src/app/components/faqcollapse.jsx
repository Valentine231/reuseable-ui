"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is your refund policy?",
    answer: "You can request a refund within 30 days.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery takes 3–5 business days.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, 24/7 support is available.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-gray-800 text-white p-4 rounded-lg">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left font-semibold"
          >
            {faq.question}
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-2 text-gray-300"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}