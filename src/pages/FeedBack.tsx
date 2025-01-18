import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import Menu from "@/components/Header/Menu/menu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import MyFeedback from "@/components/FeedBack/feedback";
import client from "@/sanity/sanity.client";

interface PackagesProps {
  images: string[];
}

export default function Packages({ images }: PackagesProps) {
  return (
    <>
      <Navbarpages />
      <Menu />
      <MyFeedback images={images} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch feedback images from Sanity
  let images: string[] = [];
  try {
    const query = `*[_type == "feedback"]{ picture { asset->{url} } }`;
    const results = await client.fetch<{ picture: { asset: { url: string } } }[]>(query);
    images = results.map((result) => result.picture.asset.url);
  } catch (error) {
    console.error("Error fetching feedback images:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images,
    },
  };
};
