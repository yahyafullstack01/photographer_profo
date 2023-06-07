import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import MyPackages from "../components/MyPackages/MyPackages"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";

export default function Packages() {
    return (
        <>
            <Navbarpages />
            <MyPackages />
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