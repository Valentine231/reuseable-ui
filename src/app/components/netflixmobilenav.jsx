"use client";

import { motion } from "framer-motion";
import { FaHome, FaSearch, FaFilm, FaUser } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "/", icon: <FaHome />, label: "Home" },
  { id: "/search", icon: <FaSearch />, label: "Search" },
  { id: "/movies", icon: <FaFilm />, label: "Movies" },
  { id: "/profile", icon: <FaUser />, label: "Profile" },
];

export default function NetflixMobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full z-50"
    >
      {/* BACKGROUND */}
      <div className="backdrop-blur-md bg-black/80 border-t border-gray-800">
        <div className="flex justify-around items-center py-3 relative">
          
          {navItems.map((item) => {
            const isActive = pathname === item.id;

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.id)}
                className="relative flex flex-col items-center text-xs"
              >
                {/* ACTIVE BUBBLE */}
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute -top-3 w-12 h-12 bg-red-600/20 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* ICON */}
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    color: isActive ? "#fff" : "#9ca3af",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-lg z-10"
                >
                  {item.icon}
                </motion.div>

                {/* LABEL */}
                <span
                  className={`mt-1 z-10 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>

                {/* DOT */}
                {isActive && (
                  <motion.div
                    layoutId="dot"
                    className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}