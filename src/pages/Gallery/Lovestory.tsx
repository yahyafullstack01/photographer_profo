import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";
import MyLove from "@/components/MyGallery/GalleryPages/MyLove";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
export default function LoveStory() {
    return (
        <>
            <MyLove />
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

