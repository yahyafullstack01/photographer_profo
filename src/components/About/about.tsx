import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function About() {
    const { t } = useTranslation("Home");
    const [image, setImage] = useState<string | null>(null);

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
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);


    return (
        <div className="About">
            <h1 className="About_title">{About_title}</h1>
            <div className="About_grid">
                <div className="About_text-con">
                    <p className="About_text">
                        {About_text[0]}
                        <br></br><br></br>
                        {About_text[1]}
                        <br></br><br></br>
                        {About_text[2]}
                        <br></br><br></br>
                        {About_text[3]}
                    </p>
                </div>
                {image && (
                    <img
                        className="About_img"
                        src={image}
                        alt="About Me photo"
                    />
                )}
            </div>
        </div>
    );
}


