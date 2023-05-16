import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";

export default function Services() {
    const [images, setImages] = useState<string[]>([]);
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
        };

        fetchImages();
    }, []);

    return (
        <div className="Services">
            <h1 className="Services_title">Services</h1>
            <div className="Services_Grid">
                <div className=" Services_block Services_block--1">
                    <img className="Services_img" src={images[0]} alt="Service 1" />
                    <div className="Services_grid-content">
                        <h1 className="Services_grid-content-title">EXPRESS PHOTOSHOOT</h1>
                        <p className="Services_grid-content-text">
                            Photoshoots can be overwhelming, which is why it’s beneficial to<br />
                            have an experienced professional managing the details.Through this<br />
                            service, you can count on me to guide you in every step of the way.
                        </p>
                    </div>
                </div>
                <div className=" Services_block Services_block--2">
                    <div className="Services_grid-content">
                        <h1 className="Services_grid-content-title">FULL PHOTOSHOOT</h1>
                        <p className="Services_grid-content-text">
                            Throughout many years of providing this service to clients, I have<br />
                            gained the experience and expertise necessary to make this process<br />
                            as seamless as possible. If you have any questions, simply reach out.
                        </p>
                    </div>
                    <img className="Services_img" src={images[1]} alt="Service 2" />
                </div>
                <div className="Services_block Services_block--3">
                    <img className="Services_img" src={images[2]} alt="Service 3" />
                    <div className="Services_grid-content">
                        <h1 className="Services_grid-content-title">INITIAL CONSULTATION</h1>
                        <p className="Services_grid-content-text">
                            As one of my most popular services, these appointments tend to fill<br />
                            up fast. I’m committed to working closely with my clients to<br />
                            understand exactly what they’re looking for, then capturing<br />
                            the perfect moment with ease.
                        </p>
                    </div>
                </div>
                <div className=" Services_block Services_block--4">
                    <div className="Services_grid-content">
                        <h1 className="Services_grid-content-title">Portrait Photography</h1>
                        <p className="Services_grid-content-text">
                            If you're looking for stunning portraits that capture your essence <br />
                            and personality, our Portrait Photography Service is the perfect choice,<br />
                            for you. We have the experience and expertise to create beautiful, timeless portraits<br />
                            that you'll treasure for years to come.
                        </p>
                    </div>
                    <img className="Services_img" src={images[3]} alt="Service 4" />
                </div>
            </div>
            <div className="Services_package-con">
                <h1 className="Services_package-txt">If you're Interested in my services and would like to know more, check out my Packages</h1>
                <button className="Services_package-btn">
                    My Packages
                </button>
            </div>
        </div>
    );
}