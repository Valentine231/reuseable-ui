"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// 🔹 Reusable Input Field
const WaveField = ({ label, type = "text", value, setValue }) => {
  const [focused, setFocused] = useState(false);

  const letters = label.split("");

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        placeholder=" "
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full p-3 bg-transparent border-b border-white/40 text-white outline-none placeholder-transparent focus:border-blue-400 transition"
      />

      {/* LABEL */}
      <label className="absolute left-0 top-3 flex gap-[2px] pointer-events-none">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            animate={{
              y: focused || value ? -22 : 0,
              scale: focused || value ? 0.8 : 1,
              color: focused ? "#38bdf8" : "#ffffff",
            }}
            transition={{
              delay: i * 0.03,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="text-sm"
          >
            {char}
          </motion.span>
        ))}
      </label>

      {/* Underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-blue-400"
        initial={{ width: 0 }}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

// 🔹 Main Login Form
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });

    // 👉 plug in Supabase here later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl space-y-6"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-white text-2xl font-bold">Welcome Back</h2>
          <p className="text-white/60 text-sm">Login to your account</p>
        </div>

        {/* Email */}
        <WaveField
          label="Email"
          value={email}
          setValue={setEmail}
        />

        {/* Password */}
        <div className="relative">
          <WaveField
            label="Password"
            type={show ? "text" : "password"}
            value={password}
            setValue={setPassword}
          />

          {/* Show/Hide Button */}
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-3 text-white/60 hover:text-white"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Sign In
        </motion.button>

        {/* Divider */}
        <div className="text-center text-white/50 text-sm">
          Don’t have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </div>
      </motion.form>
    </div>
  );
}