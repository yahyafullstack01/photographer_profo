import client from "@/sanity/sanity.client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";


export default function MyGallery() {
    const [Love, setLove] = useState<string[]>([]);
    const [Portrait, setPortrait] = useState<string[]>([]);
    const [Pregnancy, setPregnancy] = useState<string[]>([]);
    const [Family, setFamily] = useState<string[]>([]);
    const [Wedding, setWedding] = useState<string[]>([]);

    const { t } = useTranslation("Home");
    const Gallery_header: any = t('Gallery_title', { returnObjects: true });
    const Gallery_box_1: any = t('Gallery_box_1', { returnObjects: true });
    const Gallery_box_2: any = t('Gallery_box_2', { returnObjects: true });
    const Gallery_box_3: any = t('Gallery_box_3', { returnObjects: true });
    const Gallery_box_4: any = t('Gallery_box_4', { returnObjects: true });
    const Gallery_box_5: any = t('Gallery_box_5', { returnObjects: true });

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
        };

        fetchImages();
    }, []);

    // This function fetches the Portrait Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "portrait_card"]{ picture { asset->{url} } }`;
                const results = await client.fetch<{ title: string, picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);

                setPortrait(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    // This function fetches the Pregnancy Card Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "pregnancy_card"]{picture { asset->{url} } }`;
                const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

                const urls = results.map((result) => result.picture.asset.url);

                setPregnancy(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
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
        };

        fetchImages();
    }, []);

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
        };

        fetchImages();
    }, []);

    return (
        <div id="Gallery" className="Mygallery">
            <h1 className="Mygallery_title">{Gallery_header}</h1>
            <div className="Mygallery_Grid">
                <Link passHref href="/Gallery/Lovestory" className="Mygallery_anchor">
                    <div className="Mygallery_container">
                        <img
                            src={Love[0]}
                            alt="The image"
                            className="Mygallery_img"
                        />
                        <h2 className="Mygallery_info">{Gallery_box_1}</h2>
                    </div>
                </Link>
                <Link passHref href="/Gallery/Portraitstory" className="Mygallery_anchor">
                    <div className="Mygallery_container">
                        <img
                            src={Portrait[0]}
                            alt="The image"
                            className="Mygallery_img"
                        />
                        <h2 className="Mygallery_info">{Gallery_box_2}</h2>
                    </div>
                </Link>
                <Link passHref href="/Gallery/Pregnancystory" className="Mygallery_anchor">
                    <div className="Mygallery_container Mygallery_middle">
                        <img
                            src={Pregnancy[0]}
                            alt="The image"
                            className="Mygallery_img  Mygallery_middle "
                        />
                        <h2 className="Mygallery_info">{Gallery_box_3}</h2>
                    </div>
                </Link>
            </div>
            <div className="Mygallery_centered">
                <Link passHref href="/Gallery/Familystory" className="Mygallery_anchor">
                    <div className="Mygallery_container Mygallery_container_2">
                        <img
                            src={Family[0]}
                            alt="The image"
                            className="Mygallery_img"
                        />
                        <h2 className="Mygallery_info">{Gallery_box_4}</h2>
                    </div>
                </Link>
                <Link passHref href="/Gallery/Weddingstory" className="Mygallery_anchor">
                    <div className="Mygallery_container Mygallery_container_2">
                        <img
                            src={Wedding[0]}
                            alt="The image"
                            className="Mygallery_img"
                        />
                        <h2 className="Mygallery_info">{Gallery_box_5}</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}