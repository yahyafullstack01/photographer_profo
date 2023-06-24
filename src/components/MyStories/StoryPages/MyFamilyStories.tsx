import client from "../../../sanity/sanity.client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface FamilyStory {
    story: string;
    slug: string;
}

export default function MyFamilystory() {
    const [images, setImages] = useState<string[]>([]);
    const [stories, setStories] = useState<FamilyStory[]>([]);

    // This function fetches the API from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "family_stories"]{story, slug, picture { asset->{url} }, images[] { asset->{url} } }`;
                const result = await client.fetch(query);

                if (result && result.length > 0) {
                    const familyImages = result.map((item: any) => item.picture.asset.url);
                    setImages(familyImages);

                    const familyStories = result
                        .filter((item: any) => item.slug && item.slug.current) // Filter out stories without a valid slug
                        .map((item: any) => ({
                            story: item.story,
                            slug: item.slug.current,
                        }));
                    setStories(familyStories);
                }
            } catch (error) {
                console.error("Error fetching family images:", error);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="MyStory">
            <h1 className="MyStory_title">My Family Stories</h1>
            <div className="MyStory_grid-box">
                {images.map((image, index) => (
                    <div key={index}>
                        {stories[index]?.slug ? (
                            <Link href={`/Stories/Familystory/${stories[index].slug}`}>
                                <img
                                    src={image}
                                    alt="The Pictures in the gallery"
                                    className="MyStory_img"
                                />
                            </Link>
                        ) : (
                            <img
                                src={image}
                                alt="The Pictures in the gallery"
                                className="MyStory_img"
                            />
                        )}
                        <h1 className="MyStory_name">{stories[index]?.story}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}