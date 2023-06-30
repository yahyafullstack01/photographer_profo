import React, { useEffect, useState } from 'react';
import client from '../../../sanity/sanity.client';
import Skeleton from 'react-loading-skeleton';

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

                setTimeout(() => {
                    setImages(formattedImages);
                    setIsLoading(false);
                }, 2000);

            } catch (error) {
                console.error('Error fetching images:', error);
                setIsLoading(false);
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
                <img
                    className='Slider_img'
                    src={images[index]?.url}
                    alt={images[index]?.alt}
                />
            )}
        </div>
    );
};

export default Hero;


