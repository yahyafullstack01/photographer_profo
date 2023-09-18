import client from "@/sanity/sanity.client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';


export default function MyStories() {
    const [Love, setLove] = useState<string[]>([]);
    const [Portrait, setPortrait] = useState<string[]>([]);
    const [Pregnancy, setPregnancy] = useState<string[]>([]);
    const [Family, setFamily] = useState<string[]>([]);
    const [Wedding, setWedding] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { t } = useTranslation("Home");
    const Story_title: any = t('Story_title', { returnObjects: true });
    const Gallery_box_1: any = t('Gallery_box_1', { returnObjects: true });
    const Gallery_box_2: any = t('Gallery_box_2', { returnObjects: true });
    const Gallery_box_3: any = t('Gallery_box_3', { returnObjects: true });
    const Gallery_box_4: any = t('Gallery_box_4', { returnObjects: true });
    const Gallery_box_5: any = t('Gallery_box_5', { returnObjects: true });


    // This function fetches the story Wedding Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "story_wedding_card"]{ title, picture { asset->{url} } }`;
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
    
    // This function fetches the story Love Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "story_love_card"]{ picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);

                setLove(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 4000);
        };

        fetchImages();
    }, []);

    // This function fetches the story Family Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "story_family_card"]{ title, picture { asset->{url} } }`;
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




    return (
        <div id="Story" className="MyStories">
            <h1 className="MyStories_title">{Story_title}</h1>
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
                        <div className="MyStories_Grid">
                            <Link passHref href="/Stories/Weddingstory" className="MyStories_anchor">
                                <div className="MyStories_container MyStories_container">
                                    <img
                                        src={Wedding[0]}
                                        alt="The image"
                                        className="MyStories_img"
                                    />
                                    <h2 className="MyStories_info">{Gallery_box_1}</h2>
                                </div>
                            </Link>
                            <Link passHref href="/Stories/Lovestory" className="MyStories_anchor">
                                <div className="MyStories_container">
                                    <img
                                        src={Love[0]}
                                        alt="The image"
                                        className="MyStories_img"
                                    />
                                    <h2 className="MyStories_info">{Gallery_box_2}</h2>
                                </div>
                            </Link>
                            <Link passHref href="/Stories/Familystory" className="MyStories_anchor">
                                <div className="MyStories_container MyStories_container">
                                    <img
                                        src={Family[0]}
                                        alt="The image"
                                        className="MyStories_img"
                                    />
                                    <h2 className="MyStories_info">{Gallery_box_4}</h2>
                                </div>
                            </Link>
                        </div>
                    </>
                )}
        </div>
    );
}