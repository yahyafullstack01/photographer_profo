import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import client from "@/sanity/sanity.client";
import GalleryComponent from "@/components/MyGallery/GalleryPages/gallery";

interface FamilyPageProps {
  images: string[];
}

export default function FamilyPage({ images }: FamilyPageProps) {
  return (
    <>
      <Navbarpages />
      <GalleryComponent images={images} titleIndex={3} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch family images from Sanity
  let images: string[] = [];
  try {
    const query = `*[_type == "family"] { picture { asset->{url} } }`;
    const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);
    images = results.map((item) => item.picture.asset.url);
  } catch (error) {
    console.error("Error fetching family images:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images
    },
  };
};
