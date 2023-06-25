import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import MyPackages from "../components/MyPackages/MyPackages"
import Menu from "@/components/Header/Menu/menu";
import Contact_Packages from "../components/Contacts/Contacts_Packages/contacts_packages";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";

export default function Packages() {
    return (
        <>
            <Navbarpages />
            <Menu />
            <MyPackages />
            <Contact_Packages />
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