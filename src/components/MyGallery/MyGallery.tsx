import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MyGalleryProps {
    Love: string[];
    Wedding: string[];
    Family: string[];
    Black_white: string[];
}

export default function MyGallery({ Love, Wedding, Family, Black_white }: MyGalleryProps) {
    const { t } = useTranslation("Home");
    const [isLoading, setIsLoading] = useState(true);

    const Gallery_header: any = t("Gallery_title", { returnObjects: true });
    const Gallery_box_1: any = t("Gallery_box_1", { returnObjects: true });
    const Gallery_box_2: any = t("Gallery_box_2", { returnObjects: true });
    const Gallery_box_4: any = t("Gallery_box_4", { returnObjects: true });
    const Gallery_box_5: any = t("Gallery_box_5", { returnObjects: true });

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show skeleton for 2 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div id="Gallery" className="Mygallery">
            <h1 className="Mygallery_title">{Gallery_header}</h1>
            {isLoading ? (
                <div className="Mygallery_Grid">
                    {/* Skeleton loaders */}
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <div key={index} className="Mygallery_skeleton">
                                <div className="Mygallery_skeleton_img"></div>
                                <div className="Mygallery_skeleton_text"></div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="Mygallery_Grid">
                    <Link passHref href="/Gallery/Love_album" className="Mygallery_anchor">
                        <div className="Mygallery_container">
                            <Image
                                src={Love[0]}
                                alt="Love gallery image"
                                className="Mygallery_img"
                                loading="lazy"
                                width={9000}
                                height={9000}
                            />
                            <h2 className="Mygallery_info">{Gallery_box_2}</h2>
                        </div>
                    </Link>
                    <Link passHref href="/Gallery/Wedding_album" className="Mygallery_anchor">
                        <div className="Mygallery_container">
                            <Image
                                src={Wedding[0]}
                                alt="Wedding gallery image"
                                className="Mygallery_img"
                                loading="lazy"
                                width={9000}
                                height={9000}
                            />
                            <h2 className="Mygallery_info">{Gallery_box_1}</h2>
                        </div>
                    </Link>
                    <Link passHref href="/Gallery/Family_album" className="Mygallery_anchor">
                        <div className="Mygallery_container">
                            <Image
                                src={Family[0]}
                                alt="Family gallery image"
                                className="Mygallery_img"
                                loading="lazy"
                                width={9000}
                                height={9000}
                            />
                            <h2 className="Mygallery_info">{Gallery_box_4}</h2>
                        </div>
                    </Link>
                    <Link passHref href="/Gallery/Black_white_album" className="Mygallery_anchor">
                        <div className="Mygallery_container Mygallery_container--last">
                            <Image
                                src={Black_white[0]}
                                alt="Black and white gallery image"
                                className="Mygallery_img"
                                loading="lazy"
                                width={9000}
                                height={9000}
                            />
                            <h2 className="Mygallery_info">{Gallery_box_5}</h2>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}