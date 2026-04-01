"use client"

import { useEffect, useState } from "react"
import {AnimatePresence, motion} from "framer-motion"

const Timebox = ({label, value}) => (
    <div className="flex flex-col items-center">
        <div className="relative  flex items-center justify-center  bg-gray-300 text-gray-900 text-2xl w-20 h-10">
           <AnimatePresence mode="wait">
            <motion.span 
                key={value}
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.5}}
            >
                {value.toString().padStart(2,'0')}
            </motion.span>
           </AnimatePresence>
        </div>
        <span className="text-sm mt-2">{label}</span>
    </div>
)

export const AnimatedCountdown = ({targetDate}) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if(difference > 0) {
            timeLeft = {
                days: Math.floor(difference /(1000 * 60 * 60 * 24)),
                hours: Math.floor((difference/(1000 * 60 * 60))%24),
                minutes:Math.floor(difference /( 1000 * 60)%60),
                seconds:Math.floor((difference/1000)%60)
            }
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);
        


    return (
        <div className="flex justify-center gap-7">
            <Timebox label="Days" value={timeLeft.days || 0} />
            <Timebox label="Hours" value={timeLeft.hours || 0} />
            <Timebox label="Minutes" value={timeLeft.minutes || 0} />
            <Timebox label="Seconds" value={timeLeft.seconds || 0} />
        </div>
    )
}