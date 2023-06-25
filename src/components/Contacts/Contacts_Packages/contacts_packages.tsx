
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";
import client from '@/sanity/sanity.client';

export default function Contact() {
    const { t } = useTranslation("Home");
    const [image, setImage] = useState<string | null>(null);


    const Contact_header: any = t('Contact_title', { returnObjects: true });
    const Contact_info: any = t('Contact_info', { returnObjects: true });
    const Contact_holders: any = t('Contact_holders', { returnObjects: true });
    const Contact_btn: any = t('Contact_btn', { returnObjects: true });
    const Contact_choice_label: any = t('Contact_choice_label', { returnObjects: true });
    const Contact_choice: any = t('Contact_choice', { returnObjects: true });


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
        };

        fetchImage();
    }, []);

    return (
        <div id='Contact' className='Mycontact_packages'>
            {image && (
                <img className='Mycontact_packages_img' src={image} alt="The contact picture" />
            )}
            <div className='Mycontact_packages_info-box'>
                <h1 className='Mycontact_packages_header'>{Contact_header}</h1>
                <p className='Mycontact_packages_text'>
                    {Contact_info}
                </p>
                <form
                    className='Mycontact_packages_form pageclip-form'
                    action="https://send.pageclip.co/EJu3hCGEEWDdHQ16fppwbE2ffwGbTWsz/Photography2023"
                    method='POST'
                >
                    <input
                        className='Mycontact_packages_input'
                        placeholder={Contact_holders[0]}
                        type={"text"}
                        name='name'
                        required
                    />
                    <input
                        className='Mycontact_packages_input'
                        placeholder={Contact_holders[1]}
                        type={"email"}
                        name='email'
                        required
                    />
                    <input
                        className='Mycontact_packages_input'
                        placeholder={Contact_holders[2]}
                        type={"number"}
                        name='phone'
                        required
                    />
                    <input
                        className='Mycontact_packages_input'
                        placeholder={Contact_holders[3]}
                        type={"text"}
                        name='weddingDate'
                    />
                    <input
                        className='Mycontact_packages_input'
                        placeholder={Contact_holders[4]}
                        type={"text"}
                        name='location'
                    />
                    <textarea
                        className='Mycontact_packages_textarea'
                        placeholder={Contact_holders[5]}
                        name='message'
                    />
                    <label
                        htmlFor={"package"}
                        className="Mycontact_packages_choice-box"
                    >
                        {Contact_choice_label}:
                        <select
                            name="package"
                            className="Mycontact_packages_select"
                            id="package">
                            <option
                                disabled
                                selected
                            >
                                {Contact_holders[6]}
                            </option>
                            <option
                                value={Contact_choice[0]}>
                                {Contact_choice[0]}
                            </option>
                            <option
                                value={Contact_choice[1]}>
                                {Contact_choice[1]}
                            </option>
                            <option
                                value={Contact_choice[2]}>
                                {Contact_choice[2]}
                            </option>
                        </select>
                    </label>
                    <button
                        className='Mycontact_packages_btn pageclip-form__submit'
                        type={"submit"}>
                        {Contact_btn}
                    </button>
                </form>
            </div>
        </div>
    )
}