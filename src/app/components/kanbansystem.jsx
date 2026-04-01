"use client";

import { useState } from "react";
import { Reorder, motion } from "framer-motion";

const initialData = {
  todo: [
    { id: "1", text: "Setup project" },
    { id: "2", text: "Install dependencies" },
  ],
  doing: [{ id: "3", text: "Build UI" }],
  done: [{ id: "4", text: "Plan features" }],
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDrop = (columnKey) => {
    if (!draggedItem) return;

    setColumns((prev) => {
      const newColumns = { ...prev };

      // remove from old column
      for (const key in newColumns) {
        newColumns[key] = newColumns[key].filter(
          (item) => item.id !== draggedItem.id
        );
      }

      // add to new column
      newColumns[columnKey].push(draggedItem);

      return newColumns;
    });

    setDraggedItem(null);
  };

  return (
    <div className="flex gap-6 p-6">
      {Object.entries(columns).map(([key, items]) => (
        <div
          key={key}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(key)}
          className="w-72 bg-gray-900 rounded-xl p-4 text-white"
        >
          <h2 className="mb-4 capitalize font-bold">{key}</h2>

          <Reorder.Group
            axis="y"
            values={items}
            onReorder={(newOrder) =>
              setColumns((prev) => ({ ...prev, [key]: newOrder }))
            }
            className="space-y-3 min-h-[200px]"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                draggable
                onDragStart={() => setDraggedItem(item)}
                className="p-3 bg-gray-800 rounded-lg cursor-grab"
                whileDrag={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                }}
              >
                {item.text}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      ))}
    </div>
  );
}