import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/Mycontext/context";

const Hero: React.FC = () => {
    const { images } = useAppContext();
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Artificial delay to ensure skeleton appears for at least 2 seconds
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Show skeleton for at least 3 seconds

        return () => clearTimeout(loadingTimeout);
    }, []);

    // Change the image every 4 seconds
    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="Slider">
            {isLoading ? (
                <div className="Slider_skeleton"/>
            ) : (
                <Image
                    className='Slider_img'
                    src={images[index]?.url}
                    alt="Scrolling"
                    width={9000} // Specify appropriate width
                    height={9000} // Specify appropriate height
                />
            )}

        </div>

    );
};

export default Hero;
