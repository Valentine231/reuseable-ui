"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordStrength() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    let score = 0;

    if (password.length > 5) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;

    return score;
  };

  const strength = getStrength();

  const getColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength === 2 || strength === 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const getText = () => {
    if (strength <= 1) return "Weak";
    if (strength <= 3) return "Medium";
    return "Strong";
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Input */}
      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-md bg-gray-800 text-white outline-none"
      />

      {/* Strength Bar */}
      <div className="mt-4 h-3 w-full bg-gray-700 rounded overflow-hidden">
        <motion.div
          className={`h-full ${getColor()}`}
          initial={{ width: 0 }}
          animate={{ width: `${(strength / 4) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Label */}
      <p className="mt-2 text-sm text-gray-300">
        Strength: {getText()}
      </p>
    </div>
  );
}