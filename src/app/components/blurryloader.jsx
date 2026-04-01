"use client"


import { motion } from "framer-motion";

export const BlurryLoader = () => {
    
    

    return (
        <motion.div 
         initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
       
        className="flex justify-center items-center bg-orange-50  w-10 h-10 rounded-full">
            <motion.div 
            initial={{scale:0.8, opacity:0.5}}
            animate={{scale:1.3, opacity:1}}
             transition={{duration:0.5,repeat:Infinity, ease:"easeInOut" }}

            />
        </motion.div>
    ) 
}