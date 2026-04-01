"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export const Expandingcards = ()=>{
    const [open, setisopen] = useState(false)

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        layout
        onClick={() => setisopen(!open)}
        className="bg-white rounded-2xl shadow-xl p-6 w-80 cursor-pointer"
      >
        <motion.h2 layout className="text-xl font-semibold">
          Product Card
        </motion.h2>

        <motion.p layout className="text-gray-500">
          Click to expand
        </motion.p>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-sm text-gray-600"
            >
              This card expands smoothly using Framer Motion.  
              You can place product info, images, or buttons here.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    )
}