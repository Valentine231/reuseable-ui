"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import {motion,AnimatePresence} from "framer-motion"

export const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "/images/ict.jpeg",
        "/images/welder.jpeg",
        "/images/pumber.jpeg"
    ];

   useEffect(()=>{
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full   flex justify-center items-center ">
           <AnimatePresence mode="wait">
           
           <motion.div 
           key={index}
           initial={{x: 300, opacity: 0}}
           animate={{x: 0, opacity: 1}}
           exit={{x: -300, opacity: 0}}
           />
            
            <Image src={images[index]} alt={`Image ${index}`} className="w-full h-auto" width={384} height={384} />
           
            
            </AnimatePresence>

             {/* <button onClick={prev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded">Prev</button>
            <button onClick={next} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded">Next</button> */}

        </div>
    )
}