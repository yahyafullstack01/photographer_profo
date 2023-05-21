import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";
import client from '@/sanity/sanity.client';


export default function MyBlogs() {
    const { t } = useTranslation("Home");
    const [images, setImages] = useState<string[]>([]);

    const Myblogs_header: any = t('Blogs_title', { returnObjects: true });
    const Myblogs_title_1: any = t('Blog1_title', { returnObjects: true });
    const Myblogs_title_2: any = t('Blog2_title', { returnObjects: true });
    const Myblogs_title_3: any = t('Blog3_title', { returnObjects: true });
    const Myblogs_text_1: any = t('Blogs1-content', { returnObjects: true });
    const Myblogs_text_2: any = t('Blogs2-content', { returnObjects: true });
    const Myblogs_text_3: any = t('Blogs3-content', { returnObjects: true });

    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const query = `*[_type == "blogs"]{ picture { asset->{url} } }`;
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
        <div  id="Blogs" className="Myblogs">
            <h1 className="Myblogs_header">{Myblogs_header}</h1>
            <div className='Myblogs_box-con'>
                <div className="Myblogs_box">
                    <img
                        src={images[2]}
                        alt="The image blogs"
                        className='Myblogs_img'
                    />
                    <h1 className='Myblogs_title'>{Myblogs_title_1}</h1>
                    <p className='Myblogs_text'>{Myblogs_text_1[0]}</p>
                    <br></br>
                    <p className='Myblogs_text'>{Myblogs_text_1[1]}</p>
                </div>
                <div className="Myblogs_box">
                    <img
                        src={images[0]}
                        alt="The image blogs"
                        className='Myblogs_img'
                    />
                    <h1 className='Myblogs_title'>{Myblogs_title_2}</h1>
                    <p className='Myblogs_text'>{Myblogs_text_2[0]}</p>
                    <br></br>
                    <p className='Myblogs_text'>{Myblogs_text_2[1]}</p>
                </div>
                <div className="Myblogs_box">
                    <img
                        src={images[1]}
                        alt="The image blogs"
                        className='Myblogs_img'
                    />
                    <h1 className='Myblogs_title'>{Myblogs_title_3}</h1>
                    <p className='Myblogs_text'>{Myblogs_text_3[1]}</p>
                    <br></br>
                    <p className='Myblogs_text'>{Myblogs_text_3[1]}</p>
                </div>
            </div>
        </div>
    )
}