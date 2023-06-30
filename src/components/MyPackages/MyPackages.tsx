import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from 'react-loading-skeleton';


export default function MyPackages() {
    const { t } = useTranslation("Home");
    const [isLoading, setIsLoading] = useState(true);


    const Package_title: any = t('Package_title', { returnObjects: true });
    const Package_quote: any = t('Package_quote', { returnObjects: true });
    const Package_types: any = t('Package_types', { returnObjects: true });
    const Package_info_1: any = t('Package_info-1', { returnObjects: true });
    const Package_info_2: any = t('Package_info-2', { returnObjects: true });
    const Package_info_3: any = t('Package_info-3', { returnObjects: true });
    const Package_info_4: any = t('Package_info-4', { returnObjects: true });



    const [images, setImages] = useState<string[]>([]);
    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "packages"]{ picture { asset->{url} } }`;
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
        <div className="MyPackages">
            <h1 className="MyPackages_title">{Package_title}</h1>
            <q className="MyPackages_quote">{Package_quote}</q>
            {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100%'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <div className="MyPackages_Box">
                    <div className="MyPackages_Box--all">
                        <h1 className="MyPackages_type">{Package_types[0]}</h1>
                        <img
                            src={images[0]}
                            alt="The image of the packages"
                            className="MyPackages_picture"
                        />
                        <ul className="MyPackages_list-con">
                            <p className="MyPackages_list"><strong>{Package_info_1[0]}</strong></p>
                            <li className="MyPackages_list">{Package_info_1[1]}</li>
                            <li className="MyPackages_list">{Package_info_1[2]}</li>
                            <li className="MyPackages_list">{Package_info_1[3]}</li>
                            <li className="MyPackages_list">{Package_info_1[4]}</li>
                        </ul>
                    </div>
                    <div className="MyPackages_Box--all">
                        <h1 className="MyPackages_type">{Package_types[1]}</h1>
                        <img
                            src={images[1]}
                            alt="The image of the packages"
                            className="MyPackages_picture"
                        />
                        <ul className="MyPackages_list-con">
                            <p className="MyPackages_list"><strong>{Package_info_2[0]}</strong></p>
                            <li className="MyPackages_list">{Package_info_2[1]}</li>
                            <li className="MyPackages_list">{Package_info_2[2]}</li>
                            <li className="MyPackages_list">{Package_info_2[3]}</li>
                            <li className="MyPackages_list">{Package_info_2[4]}</li>
                        </ul>
                    </div>
                    <div className="MyPackages_Box--all">
                        <h1 className="MyPackages_type">{Package_types[2]}</h1>
                        <img
                            src={images[2]}
                            alt="The image of the packages"
                            className="MyPackages_picture"
                        />
                        <ul className="MyPackages_list-con">
                            <p className="MyPackages_list"><strong>{Package_info_3[0]}</strong></p>
                            <li className="MyPackages_list">{Package_info_3[1]}</li>
                            <li className="MyPackages_list">{Package_info_3[2]}</li>
                            <li className="MyPackages_list">{Package_info_3[3]}</li>
                            <li className="MyPackages_list">{Package_info_3[4]}</li>
                        </ul>
                    </div>
                    <div className="MyPackages_Box--all">
                        <h1 className="MyPackages_type">{Package_types[3]}</h1>
                        <img
                            src={images[3]}
                            alt="The image of the packages"
                            className="MyPackages_picture"
                        />
                        <ul className="MyPackages_list-con">
                            <p className="MyPackages_list"><strong>{Package_info_3[0]}</strong></p>
                            <li className="MyPackages_list">{Package_info_4[1]}</li>
                            <li className="MyPackages_list">{Package_info_4[2]}</li>
                            <li className="MyPackages_list">{Package_info_4[3]}</li>
                            <li className="MyPackages_list">{Package_info_4[4]}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}