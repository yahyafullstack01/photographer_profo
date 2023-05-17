import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import MyPortrait from "../../components/MyGallery/GalleryPages/MyPortrait";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
export default function LoveStory() {
    return (
        <>
            <MyPortrait />
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