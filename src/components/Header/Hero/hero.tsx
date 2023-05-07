import { useEffect, useState } from 'react';

export default function Hero() {

    const images = [
        'https://images.unsplash.com/photo-1512882549909-02d06bf80585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1521405785232-7a56b029191e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        'https://images.unsplash.com/photo-1508182390781-8dd476c3237c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    console.log(images[0]);



    return (
        <div className='Slider'>
            <img className='Slider_img' src={images[index]} alt="Images of the slider" />
        </div>
    )

    
}