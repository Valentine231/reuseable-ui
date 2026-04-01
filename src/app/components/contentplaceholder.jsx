"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ContentPlaceholder = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setContent(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-60 bg-gray-800 animate-pulse rounded-xl"
            />
          ))
        : content.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-900 rounded-xl overflow-hidden text-white cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-sm line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs opacity-70 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-2 font-bold text-sm">
                  ${item.price}
                </div>
              </div>
            </motion.div>
          ))}
    </div>
  );
};