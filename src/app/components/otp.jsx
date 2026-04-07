"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function OTPInput({ length = 6 }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move back on delete
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    console.log("OTP:", code);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Inputs */}
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <motion.input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            whileFocus={{ scale: 1.1 }}
            className="w-12 h-14 text-center text-xl border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow"
      >
        Verify
      </button>
    </div>
  );
}