import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import MyBlack_white from "../../components/MyGallery/GalleryPages/MyBlack_white";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
export default function LoveStory() {
    return (
        <>
            <Navbarpages />
            <MyBlack_white />
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