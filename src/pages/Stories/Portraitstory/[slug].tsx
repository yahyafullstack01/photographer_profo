import { useRouter } from "next/router";
import client from "../../../sanity/sanity.client";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';



export default function PortraitStoryPage() {
    const router = useRouter();
    const { slug } = router.query;
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);


    console.log(slug);

    // This Function gets the Current slug of the Image clicked and shows The nested Arr in it From Sanity.io
    useEffect(() => {
        const fetchPortraitStory = async () => {
            try {
                const query = `*[_type == "portrait_stories" && slug.current == $slug][0]{story ,images[] { asset->{url} } }`;
                const result = await client.fetch(query, { slug });

                if (result) {
                    const portraitImages = result.images.map(
                        (item: { asset: { url: string } }) => item.asset.url
                    );
                    setImages(portraitImages);
                }
            } catch (error) {
                console.error("Error fetching portrait story:", error);
            }
            setIsLoading(false);
        };

        if (slug) {
            fetchPortraitStory();
        }
    }, [slug]);


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
        <div className="StoryPage">
            <h1 className="StoryPage_title">{slug} Photos</h1>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100%'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <div className="StoryPage_grid-box">
                    {images.map((image, imageIndex) => (
                        <img
                            key={imageIndex}
                            src={image}
                            alt={`Nested Image ${imageIndex}`}
                            className="StoryPage_img"
                            onClick={() => showFullscreenImage(imageIndex)}
                        />
                    ))}
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
                    )}
                </div>
            )}

        </div>
    );
}

