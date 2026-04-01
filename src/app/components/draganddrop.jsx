"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

export const DragList = () => {
  const [items, setItems] = useState([
    "React",
    "Next.js",
    "Framer Motion",
    "Tailwind",
  ]);

  return (
    <div className="w-72 mx-auto mt-10">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-3"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            className="p-4 bg-gray-900 text-white rounded-xl cursor-grab"
            whileDrag={{ scale: 1.05 }}
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};