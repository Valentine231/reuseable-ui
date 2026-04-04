"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-black">learn2earn</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">About</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} color="black"/>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-gray-200 z-50 shadow-2xl p-6"
              variants={menuVariants}
              whileTap={{ scale: 1.02 }}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8 text-blue-600">
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-6 text-lg text-black">
                {["Home", "Work", "Blog", "About"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   Home,
//   Briefcase,
//   BookOpen,
//   Users,
// } from "lucide-react";

// const tabs = [
//   { name: "Home", icon: Home },
//   { name: "Work", icon: Briefcase },
//   { name: "Blog", icon: BookOpen },
//   { name: "About", icon: Users },
// ];

// export default function MobileNav() {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="fixed bottom-0 left-0 w-full flex justify-center">
//       <div className="relative flex w-full max-w-md bg-white shadow-2xl rounded-t-2xl px-4 py-2">
        
//         {/* Sliding Indicator */}
//         <motion.div
//           layout
//           className="absolute top-0 h-full w-1/4 bg-gray-100 rounded-xl"
//           animate={{ x: `${active * 100}%` }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />

//         {tabs.map((tab, index) => {
//           const Icon = tab.icon;

//           return (
//             <button
//               key={tab.name}
//               onClick={() => setActive(index)}
//               className="relative z-10 flex flex-1 flex-col items-center justify-center py-2"
//             >
//               <motion.div
//                 animate={{
//                   scale: active === index ? 1.2 : 1,
//                   y: active === index ? -4 : 0,
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Icon
//                   className={`w-6 h-6 ${
//                     active === index ? "text-black" : "text-gray-400"
//                   }`}
//                 />
//               </motion.div>

//               <motion.p
//                 animate={{
//                   opacity: active === index ? 1 : 0.5,
//                 }}
//                 className="text-xs mt-1"
//               >
//                 {tab.name}
//               </motion.p>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }