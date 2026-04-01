"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex gap-3 items-center justify-center min-h-screen">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-5 bg-blue-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
           ease: "easeInOut",
           repeatDelay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// export default function Loader() {
//   return (
//     <div className="flex gap-2 items-center justify-center min-h-screen">
//       {[0, 1, 2].map((i) => (
//         <motion.div
//           key={i}
//           className="w-4 h-4 bg-blue-500 rounded-full"
//           animate={{ y: [0, -15, 0] }}
//           transition={{
//             duration: 0.3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.2,
//           }}
//         />
//       ))}
//       ...
//     </div>
//   );
// }