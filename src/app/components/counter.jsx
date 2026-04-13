"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
//   const target = 500;

//   useEffect(() => {
//     const duration = 2000;
//     const increment = target / (duration / 16);

//     const handlecount = setInterval(() => {
//       setCount((prev) => {
//         const next = prev + increment;
//         if (next >= target) {
//           clearInterval(interval);
//           return target;
//         }
//         return next;
//       });
//     }, 16);

//     return () => clearInterval(interval);
//   }, []);

  return (
    
    <div className="h-screen flex items-center justify-center text-5xl font-bold">
      <p className="text-lg font-bold ">
       count:{Math.floor(count)}
      </p>
      
      <div >
         <button
      className="bg-red-500 text-white font-bold px-4 py-2 rounded mx-2"
      onClick={() => setCount(0)}>Reset</button>
      <button 
      className="bg-green-500 text-black font-bold rounded-lg mx-2 px-4 py-2"
      onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded mx-2"
        onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>
     
    </div>
  );
}