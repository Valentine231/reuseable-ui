

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Phone } from "lucide-react";

export default function RotatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900 text-white">
      
      {/* NAV */}
      <nav className="fixed top-1/2 left-5 -translate-y-1/2 space-y-6 z-10 text-lg">
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
          <Home size={20} />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
          <User size={20} />
          <span>About</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
          <Phone size={20} />
          <span>Contact</span>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <motion.div
        animate={{
          rotate: open ? -20 : 0,
          scale: open ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="origin-bottom-left bg-white text-black h-full p-10 relative"
      >
        {/* BUTTON */}
        <div className="absolute top-5 left-5">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black text-white p-2 rounded-full"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* CONTENT */}
        <h1 className="text-3xl font-bold">Rotating Navigation</h1>
        <p className="mt-4 max-w-md">
          This is a clean rotating navigation animation using Framer Motion and lucide icons.
        </p>
      </motion.div>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RotatingNav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative h-screen overflow-hidden bg-gray-900 text-white">
      
//       {/* NAV */}
//       <nav className="fixed top-1/2 left-5 -translate-y-1/2 space-y-6 z-10 text-lg">
//         <p className="hover:text-green-400 cursor-pointer">🏠 Home</p>
//         <p className="hover:text-green-400 cursor-pointer">📄 About</p>
//         <p className="hover:text-green-400 cursor-pointer">📞 Contact</p>
//       </nav>

//       {/* MAIN CONTENT */}
//       <motion.div
//         animate={{
//           rotate: open ? -20 : 0,
//           scale: open ? 0.9 : 1,
//         }}
//         transition={{ duration: 0.5 }}
//         className="origin-bottom-left bg-white text-black h-full p-10 relative"
//       >
//         {/* BUTTONS */}
//         <div className="absolute top-5 left-5 flex gap-3">
//           {!open && (
//             <button
//               onClick={() => setOpen(true)}
//               className="bg-black text-white px-3 py-2 rounded"
//             >
//               ☰
//             </button>
//           )}
//           {open && (
//             <button
//               onClick={() => setOpen(false)}
//               className="bg-black text-white text-2xl px-3 py-2 rounded"
//             >
//               ✖
//             </button>
//           )}
//         </div>

//         {/* CONTENT */}
//         <h1 className="text-3xl font-bold">Rotating Navigation</h1>
//         <p className="mt-4">
//           This is a cool rotating navigation animation using Framer Motion.
//         </p>
//       </motion.div>
//     </div>
//   );
// }
