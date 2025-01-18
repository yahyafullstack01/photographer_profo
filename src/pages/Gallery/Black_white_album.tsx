import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import client from "@/sanity/sanity.client";
import GalleryComponent from "@/components/MyGallery/GalleryPages/gallery";

export default function LoveStory({ images }: { images: string[] }) {
  return (
    <>
      <Navbarpages />
      <GalleryComponent images={images} titleIndex={1} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch black and white images from Sanity
  let images: string[] = [];
  try {
    const query = `*[_type == "black_white"] { picture { asset->{url} } }`;
    const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);
    images = results.map((item) => item.picture.asset.url);
  } catch (error) {
    console.error("Error fetching Black and white images:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images,
    },
    revalidate: 60, // Optional: Revalidate the page every 60 seconds
  };
};

