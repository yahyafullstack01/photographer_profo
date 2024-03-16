
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";
import client from '@/sanity/sanity.client';
import Skeleton from 'react-loading-skeleton';


export default function Contact() {
    const { t } = useTranslation("Home");
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);



    const Contact_header: any = t('Contact_title', { returnObjects: true });
    const Contact_info: any = t('Contact_info', { returnObjects: true });
    const Contact_holders: any = t('Contact_holders', { returnObjects: true });
    const Contact_btn: any = t('Contact_btn', { returnObjects: true });

    // This function fetches the Api from Sanity.io
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const query = `*[_type == "contact"][0]{ picture { asset->{url} } }`;
                const result = await client.fetch<{ picture: { asset: { url: string } } }>(query);

                if (result.picture && result.picture.asset && result.picture.asset.url) {
                    setImage(result.picture.asset.url);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
            setIsLoading(false);
        };

        fetchImage();
    }, []);

    return (
        <div id='Contact' className='Mycontact'>
            {/* {isLoading ? (
                <Skeleton
                    height='100vh'
                    width='100%'
                    baseColor='transparent'
                    highlightColor='rgb(208, 235, 255)'
                />
            ) : (
                <>
                    {image && (
                        <img className='Mycontact_img' src={image} alt="The contact picture" />
                    )}
                </>
            )} */}

            <div className='Mycontact_info-box'>
                <h1 className='Mycontact_header'>{Contact_header}</h1>
                <p className='Mycontact_text'>
                    {Contact_info}
                </p>
                <form
                    className='Mycontact_form pageclip-form'
                    action="https://send.pageclip.co/EJu3hCGEEWDdHQ16fppwbE2ffwGbTWsz/Photography2023"
                    method='POST'
                >
                    <input
                        className='Mycontact_input'
                        placeholder={Contact_holders[0]}
                        type={"text"}
                        name='name'
                        required />
                    <input
                        className='Mycontact_input'
                        placeholder={Contact_holders[1]}
                        type={"email"}
                        name='email'
                        required
                    />
                    <input
                        className='Mycontact_input'
                        placeholder={Contact_holders[2]}
                        type={"number"}
                        name='phone'
                        required
                    />
                    <input
                        className='Mycontact_input'
                        placeholder={Contact_holders[3]}
                        type={"text"}
                        name='weddingDate'
                    />
                    <input
                        className='Mycontact_input'
                        placeholder={Contact_holders[4]}
                        type={"text"}
                        name='location'
                    />
                    <textarea
                        className='Mycontact_input'
                        placeholder={Contact_holders[5]}
                        name='message'
                    />
                    <button
                        className='Mycontact_btn pageclip-form__submit'
                        type={"submit"}
                    >
                        {Contact_btn}
                    </button>
                </form>
            </div>
        </div>
    )
}