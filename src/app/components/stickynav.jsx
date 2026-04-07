"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 100) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">MyApp</h1>

        <ul className="flex gap-6">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
}