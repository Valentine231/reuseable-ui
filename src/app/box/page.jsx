"use client"

import { useState, useEffect } from "react";
import { BlurryLoader } from "../components/blurryloader";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate loading for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) {
        return <BlurryLoader />; // Don't render anything when not loading
    }

    return (
        <div className="flex justify-center items-center bg-gray-200 h-screen">
            {[...Array(5)].map((_, i) => (
                <BlurryLoader key={i} />
            ))}
            welcome to project x
        </div>
    );
}   