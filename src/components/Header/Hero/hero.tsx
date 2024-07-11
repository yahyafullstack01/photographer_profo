import React, { useEffect, useState } from 'react';
import client from '../../../sanity/sanity.client';
import Skeleton from 'react-loading-skeleton';  
import Image from 'next/image';

interface Image {
    _id: string;
    url: string;
    alt: string;
}

const Hero = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "slider"] { _id, picture { asset->{url}, alt } }`;
                const result = await client.fetch<{ _id: string, picture: { asset: { url: string }, alt: string } }[]>(query);

                const formattedImages = result.map(item => ({
                    _id: item._id,
                    url: item.picture.asset.url,
                    alt: item.picture.alt 
                }));

                setImages(formattedImages);

                setInterval(() => {
                    setIsLoading(false);
                }, 4000);


            } catch (error) {
                alert('Error fetching images from Sanity.io');
                setIsLoading(true);
            }
        };

        fetchImages();
    }, []);

    // This function Changes the images in the hero every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className='Slider'>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100vw'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <Image
                    className='Slider_img'
                    src={images[index]?.url}
                    alt={images[index]?.alt}
                    width={9000} // Specify appropriate width
                    height={9000} // Specify appropriate height
                />
            )}
        </div>
    );
};

export default Hero;