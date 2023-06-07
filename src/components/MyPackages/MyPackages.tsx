import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";

export default function MyPackages() {

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
        };

        fetchImages();
    }, []);

    return (
        <div className="MyPackages">
            
        </div>
    )
}

{/* <h1 className="MyPackages_title">My Packages</h1>
<p className="MyPackages_quote">Capture the perfect moments that will make memories.</p>

<div className="MyPackages_Box">
    <div className="MyPackages_Box--1">
        <h1 className="MyPackages_type">Minimum</h1>
        <img
            src={images[2]}
            alt="The image of the packages"
            className="MyPackages_picture"
        />
        <ul className="MyPackages_list-con">
            <li className="MyPackages_list">Shooting time up to 4 hours (only Mon-Thu)</li>
            <li className="MyPackages_list">Planning and consultation</li>
            <li className="MyPackages_list">Author's processing of all photos (minimum 200 pcs)</li>
            <li className="MyPackages_list">15 printed photos</li>
            <li className="MyPackages_list">All material on flash media in designer packaging</li>
        </ul>
    </div>

    <div className="MyPackages_Box--2">
        <h1 className="MyPackages_type">Standard</h1>
        <img
            src="./pacakge_standard.jpg"
            alt="The image of the packages"
            className="MyPackages_picture"
        />
        <ul className="MyPackages_list-con">
            <li className="MyPackages_list">Shooting time up to 8 hours</li>
            <li className="MyPackages_list">Preliminary meeting and consultation on preparation for the wedding and the choice of locations for the photo shoot, the conclusion of the contract</li>
            <li className="MyPackages_list">Author's processing of all photos (minimum 400 pcs)</li>
            <li className="MyPackages_list">20 printed photos</li>
            <li className="MyPackages_list">All material on flash media in designer packaging</li>
        </ul>
    </div>

    <div className="MyPackages_Box--3">
        <h1 className="MyPackages_type">Full day</h1>
        <img
            src="./package_full.jpg"
            alt="The image of the packages"
            className="MyPackages_picture"
        />
        <ul className="MyPackages_list-con">
            <li className="MyPackages_list">Shooting time up to 12 hours</li>
            <li className="MyPackages_list">Preliminary meeting and consultation on preparation for the wedding and the choice of locations for the photo shoot, the conclusion of the contract</li>
            <li className="MyPackages_list">Author's processing of all photos (minimum 600 pcs)</li>
            <li className="MyPackages_list">30 printed photos</li>
            <li className="MyPackages_list">All material on flash media in designer packaging</li>
        </ul>
    </div>
</div> */}