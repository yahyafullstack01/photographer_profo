import client from "@/sanity/sanity.client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';




export default function MyFamily() {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);



    const { t } = useTranslation("Home");
    const Gallery_pages_Names: any = t('Gallery_pages_Names', { returnObjects: true });
    const Services_package_title: any = t('Services_package_title', { returnObjects: true });
    const Services_package_btn: any = t('Services_package_btn', { returnObjects: true });

    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "family"]{ picture { asset->{url} } }`;
                const result = await client.fetch(query);

                if (result && result.length > 0) {
                    const loveImages = result.map(
                        (item: { picture: { asset: { url: string } } }) =>
                            item.picture.asset.url
                    );
                    setImages(loveImages);
                }
            } catch (error) {
                console.error("Error fetching love images:", error);
            }

            setTimeout(() => {
                setIsLoading(false);
            }, 4000);
        };
        fetchImages();
    }, []);


    // These functions are used to open and close the Fullscreen mode when looking through images
    const showFullscreenImage = (index: number) => {
        setCurrentIndex(index);
        setIsFullscreenOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const hideFullscreenImage = () => {
        setIsFullscreenOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="Gallery">
            <h1 className="Gallery_title ">{Gallery_pages_Names[3]}</h1>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100vw'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) :
                (
                    <>
                        <div className="Gallery_grid-box">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="The Pictures in the gallery"
                                    className="Gallery_img"
                                    onClick={() => showFullscreenImage(index)}
                                />
                            ))}
                        </div>
                        <div className="Gallery_package-con">
                            <h1 className="Gallery_package-txt">{Services_package_title}</h1>
                            <Link passHref href="/Packages">
                                <button className="Gallery_package-btn">
                                    {Services_package_btn}
                                </button>
                            </Link>
                        </div>
                    </>
                )
            }
            {/*This fuction toggles between fullscreen and normal mode*/}
            {isFullscreenOpen && (
                    <div id="fullscreen-overlay">
                        <span id="close-btn" onClick={hideFullscreenImage}>
                            &times;
                        </span>
                        <img
                            id="fullscreen-image"
                            src={images[currentIndex]}
                            alt={images[currentIndex]}
                        />
                        <span
                            id="prev-btn"
                            onClick={() =>
                                setCurrentIndex((prevIndex) =>
                                    (prevIndex - 1 + images.length) % images.length
                                )
                            }
                        >
                            &lt;
                        </span>
                        <span
                            id="next-btn"
                            onClick={() =>
                                setCurrentIndex((prevIndex) =>
                                    (prevIndex + 1) % images.length
                                )
                            }
                        >
                            &gt;
                        </span>
                    </div>
            )
            }
        </div >
    );
}