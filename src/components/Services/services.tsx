import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import client from '@/sanity/sanity.client';
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';


export default function Services() {
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    // This fetches the translations from  i18nexus
    const { t } = useTranslation("Home");
    const Services_header: any = t('Services_title', { returnObjects: true });
    const Services_title_1: any = t('Services_title_box-1', { returnObjects: true });
    const Services_title_2: any = t('Services_title_box-2', { returnObjects: true });
    const Services_title_3: any = t('Services_title_box-3', { returnObjects: true });
    const Services_title_4: any = t('Services_title_box-4', { returnObjects: true });
    const Services_text_1: any = t('Services_box_content_1', { returnObjects: true });
    const Services_text_2: any = t('Services_box_content_2', { returnObjects: true });
    const Services_text_3: any = t('Services_box_content_3', { returnObjects: true });
    const Services_text_4: any = t('Services_box_content_4', { returnObjects: true });
    const Services_package_title: any = t('Services_package_title', { returnObjects: true });
    const Services_package_btn: any = t('Services_package_btn', { returnObjects: true });


    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "services"]{ picture { asset->{url} } }`;
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
        <div id="Services" className="Services">
            <h1 className="Services_title">{Services_header}</h1>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='90vw'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) :
                <>
                    <div className="Services_Grid">
                        <div className=" Services_block Services_block--1">
                            <img
                                className="Services_img"
                                src={images[0]}
                                alt="A picture of a Sony Camera"
                            />
                            <div className="Services_grid-content">
                                <h1 className="Services_grid-content-title">{Services_title_1}</h1>
                                <p className="Services_grid-content-text">
                                    {Services_text_1[0]}
                                    <br />
                                    {Services_text_1[1]}
                                    <br />
                                    {Services_text_1[2]}
                                </p>
                            </div>
                        </div>
                        <div className=" Services_block Services_block--2">
                            <div className="Services_grid-content">
                                <h1 className="Services_grid-content-title">{Services_title_2}</h1>
                                <p className="Services_grid-content-text">
                                    {Services_text_2[0]}
                                    <br />
                                    {Services_text_2[1]}
                                    <br />
                                    {Services_text_2[2]}
                                </p>
                            </div>
                            <img
                                className="Services_img"
                                src={images[1]}
                                alt="A picture of a couple in a grass feild"
                            />
                        </div>
                    </div>
                    <div className="Services_package-con">
                        <h1 className="Services_package-txt">{Services_package_title}</h1>
                        <Link passHref href="/Packages">
                            <button className="Services_package-btn">
                                {Services_package_btn}
                            </button>
                        </Link>
                    </div>
                </>
            }
        </div>
    );
}