"use client";

import { useState } from "react";

export default function GoodCheapFast() {
  const [selected, setSelected] = useState([]);

  const options = ["good", "cheap", "fast","portable","durable"];

  const handleClick = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      if (selected.length === 3) return;
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="flex gap-4">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          const isDisabled =
            !isSelected && selected.length === 3;

          return (
            <button
              key={option}
              onClick={() => handleClick(option)}
              disabled={isDisabled}
              className={`px-6 py-3 rounded-lg capitalize transition ${
                isSelected
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-black"
              } ${
                isDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}