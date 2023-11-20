import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';

export default function About() {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // This fetches the translations from i18nexus
    const { t } = useTranslation("Home");
    const About_title: any = t('About_title', { returnObjects: true });
    const About_text: any = t('About_section', { returnObjects: true });

    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const query = `*[_type == "about"][0]{ picture { asset->{url} } }`;
                const result = await client.fetch<{ picture: { asset: { url: string } } }>(query);

                if (result.picture && result.picture.asset && result.picture.asset.url) {
                    setImage(result.picture.asset.url);
                }
            } catch (error) {
                console.error('Error fetching image from Sanity.io');
            }
            setIsLoading(false);
        };

        fetchImage();
    }, []);

    return (
        <div className="About" id="About">
            <h1 className="About_title">{About_title}</h1>
            <div className="About_grid">
                <div className="About_text-con">
                    <p className="About_text">
                        {About_text[0]}
                        <br /><br />
                        {About_text[1]}
                        <br /><br />
                        {About_text[2]}
                        <br /><br />
                        {About_text[3]}
                    </p>
                </div>
                {isLoading ? (
                    <Skeleton
                        height='100vh'
                        width="100%"
                        baseColor='transparent'
                        highlightColor='rgb(208, 235, 255)'
                    />
                ) : (
                    <div className="About_Vid-con">
                        <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            controls={false}
                            className="About_Vid"
                        >
                            <source src="/wedding.mp4" type="video/mp4" />
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
}
