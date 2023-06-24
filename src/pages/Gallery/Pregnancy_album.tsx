import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import MyPregnancy from "../../components/MyGallery/GalleryPages/MyPregnancy";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
export default function LoveStory() {
    return (
        <>
            <Navbarpages />
            <MyPregnancy />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const lang = locale ?? 'en';

    return {
        props: {
            ...(await serverSideTranslations(lang, ['Home'])),
        },
    };
};