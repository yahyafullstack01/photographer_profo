import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import client from "@/sanity/sanity.client";
import GalleryComponent from "@/components/MyGallery/GalleryPages/gallery";

interface LoveStoryProps {
  images: string[];
}

export default function LoveStory({ images }: LoveStoryProps) {
  return (
    <>
      <Navbarpages />
      <GalleryComponent images={images} titleIndex={0} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch images for the love gallery
  let images: string[] = [];
  try {
    const query = `*[_type == "love"] | order(_createdAt desc) { picture { asset->{url} } }`;
    const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);

    images = results
      .filter((item) => item.picture?.asset?.url)
      .map((item) => item.picture.asset.url);
  } catch (error) {
    console.error("Error fetching love images:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images,
    },
    revalidate: 60, // Optional: Regenerate the page every 60 seconds
  };
};
