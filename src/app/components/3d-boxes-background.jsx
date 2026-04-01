"use client"

import {delay, motion} from 'framer-motion';


export const ThreeDBoxesBackground = () => {
    
    return(
        <motion.div
        initial={{y:0, rotateX:0, rotateY:0}}
        animate={{
            y:[0,-40,0],
            rotateX:[0,360],
            rotateY:[0,360]
        }}
        transition={{
            duration:10,
            repeat:Infinity,
            ease:'linear',
            delay:0.5
        }}

        className='w-40 h-20 bg-white backdrop-blur-md border border-white/10'
        style={{
            transformStyle:'preserve-3d'
        }}
        />
    )
}