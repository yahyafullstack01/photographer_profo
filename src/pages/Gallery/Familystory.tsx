import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import MyFamily from "../../components/MyGallery/GalleryPages/MyFamily";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
export default function LoveStory() {
    return (
        <>
            <MyFamily />
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