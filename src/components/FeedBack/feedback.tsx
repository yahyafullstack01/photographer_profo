import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';
import Image from "next/image";


export default function MyFeedback() {
    const { t } = useTranslation("Home");
    const [isLoading, setIsLoading] = useState(true);

    const feedback_title: any = t('Feedback_title', { returnObjects: true });
    const feedback_names: any = t('Feedback_names', { returnObjects: true });
    const feedback_info_1: any = t('Feedback_info_1', { returnObjects: true });
    const feedback_info_2: any = t('Feedback_info_2', { returnObjects: true });
    const feedback_info_3: any = t('Feedback_info_3', { returnObjects: true });
    const feedback_info_4: any = t('Feedback_info_4', { returnObjects: true });

    const [images, setImages] = useState<string[]>([]);
    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "feedback"]{ picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);
                setImages(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setIsLoading(false);
        };

        fetchImages();
    }, []);

    return (
        <div className="MyFeedback">
            <h1 className="MyFeedback_title">{feedback_title}</h1>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100%'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <div className="MyFeedback_grid">
                    <div className="MyFeedback_contain-img">
                        <Image
                            src={images[0]}
                            alt="test"
                            className="MyFeedback_img"
                            width={1000} // Specify appropriate width
                            height={1000} // Specify appropriate height
                            loading="lazy"
                        />
                    </div>
                    <div className="MyFeedback_contain-info">
                        <h1 className="MyFeedback_name">{feedback_names[0]}</h1>
                        <p className="MyFeedback_txt">
                            {feedback_info_1}
                        </p>
                    </div>

                    <div className="MyFeedback_contain-img">
                        <Image
                            src={images[1]}
                            alt="test"
                            className="MyFeedback_img"
                            width={1000} // Specify appropriate width
                            height={1000} // Specify appropriate height
                            loading="lazy"
                        />
                    </div>
                    <div className="MyFeedback_contain-info">
                        <h1 className="MyFeedback_name">{feedback_names[1]}</h1>
                        <p className="MyFeedback_txt">
                            {feedback_info_2}
                        </p>
                    </div>

                    <div className="MyFeedback_contain-img">
                        <Image
                            src={images[2]}
                            alt="test"
                            className="MyFeedback_img"
                            width={1000} // Specify appropriate width
                            height={1000} // Specify appropriate height
                            loading="lazy"
                        />
                    </div>
                    <div className="MyFeedback_contain-info">
                        <h1 className="MyFeedback_name">{feedback_names[2]}</h1>
                        <p className="MyFeedback_txt">
                            {feedback_info_3}
                        </p>
                    </div>

                    <div className="MyFeedback_contain-img">
                        <Image
                            src={images[3]}
                            alt="test"
                            className="MyFeedback_img"
                            width={1000} // Specify appropriate width
                            height={1000} // Specify appropriate height
                            loading="lazy"
                        />
                    </div>
                    <div className="MyFeedback_contain-info">
                        <h1 className="MyFeedback_name">{feedback_names[3]}</h1>
                        <p className="MyFeedback_txt">
                            {feedback_info_4}
                        </p>
                    </div>
                </div>
            )}

        </div>
    )
}