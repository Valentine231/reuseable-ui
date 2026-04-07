"use client";

import OTPInput from "@/app/components/otp";
import { motion } from "framer-motion";

export default function VerifyAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-3xl shadow-2xl text-center"
      >
        <h1 className="text-3xl font-bold mb-2 text-black">Verify Your Account</h1>
        <p className="text-gray-500 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <OTPInput />

        <p className="mt-6 text-sm text-gray-400">
          Didn’t receive code? <span className="text-blue-500 cursor-pointer">Resend</span>
        </p>
      </motion.div>
    </div>
  );
}