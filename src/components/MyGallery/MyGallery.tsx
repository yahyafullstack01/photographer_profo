import client from "@/sanity/sanity.client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';

export default function MyGallery() {
    const [Love, setLove] = useState<string[]>([]);
    const [Family, setFamily] = useState<string[]>([]);
    const [Wedding, setWedding] = useState<string[]>([]);
    const [Black_white, setBlack_white] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // This fetches the translations from  i18nexus
    const { t } = useTranslation("Home");
    const Gallery_header: any = t('Gallery_title', { returnObjects: true });
    const Gallery_box_1: any = t('Gallery_box_1', { returnObjects: true });
    const Gallery_box_2: any = t('Gallery_box_2', { returnObjects: true });
    const Gallery_box_4: any = t('Gallery_box_4', { returnObjects: true });
    const Gallery_box_5: any = t('Gallery_box_5', { returnObjects: true });


    // This function fetches the Wedding Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "wedding_card"]{ title, picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);
                const urls = results.map((result) => result.picture.asset.url);

                setWedding(urls);

            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        fetchImages();
    }, []);


    // This function fetches the Love Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "love_card"]{ picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);

                setLove(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        fetchImages();
    }, []);

    // This function fetches the Family Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "family_card"]{ title, picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);
                setFamily(urls);

            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        fetchImages();
    }, []);

    // This function fetches the Black and white Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "Black_white_card"]{ title, picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);

                setBlack_white(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        fetchImages();
    }, []);

    return (
        <div id="Gallery" className="Mygallery">
            <h1 className="Mygallery_title">{Gallery_header}</h1>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='90vw'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <>
                    <div className="Mygallery_Grid">
                        <Link passHref href="/Gallery/Love_album" className="Mygallery_anchor">
                            <div className="Mygallery_container">
                                <img
                                    src={Love[0]}
                                    alt="The image"
                                    className="Mygallery_img"
                                    loading="lazy"
                                />
                                <h2 className="Mygallery_info">{Gallery_box_2}</h2>
                            </div>
                        </Link>
                        <Link passHref href="/Gallery/Wedding_album" className="Mygallery_anchor">
                            <div className="Mygallery_container">
                                <img
                                    src={Wedding[0]}
                                    alt="The image"
                                    className="Mygallery_img"
                                    loading="lazy"
                                />
                                <h2 className="Mygallery_info">{Gallery_box_1}</h2>
                            </div>
                        </Link>
                        <Link passHref href="/Gallery/Family_album" className="Mygallery_anchor">
                            <div className="Mygallery_container">
                                <img
                                    src={Family[0]}
                                    alt="The image"
                                    className="Mygallery_img"
                                    loading="lazy"
                                />
                                <h2 className="Mygallery_info">{Gallery_box_4}</h2>
                            </div>
                        </Link>
                        <Link passHref href="/Gallery/Black_white_album" className="Mygallery_anchor">
                            <div className=" Mygallery_container Mygallery_container--last">
                                <img
                                    src={Black_white[0]}
                                    alt="The image"
                                    className="Mygallery_img"
                                    loading="lazy"
                                />
                                <h2 className="Mygallery_info">{Gallery_box_5}</h2>
                            </div>
                        </Link>
                    </div>
                </>
            )
            }
        </div>
    );
}