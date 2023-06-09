import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import Menu from "@/components/Header/Menu/menu";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import MyFeedback from "@/components/FeedBack/feedback";

export default function Packages() {
    return (
        <>
            <Navbarpages />
            <Menu />
            <MyFeedback />
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