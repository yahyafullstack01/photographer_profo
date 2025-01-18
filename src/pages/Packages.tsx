import Navbarpages from "@/components/Header/Navbar/navbar_pages";
import MyPackages from "../components/MyPackages/MyPackages";
import Menu from "@/components/Header/Menu/menu";
import Contact_Packages from "../components/Contacts/Contacts_Packages/contacts_packages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import client from "@/sanity/sanity.client";

interface PackagesProps {
  images: string[];
  contactImage: string | null;
}

export default function Packages({ images, contactImage }: PackagesProps) {
  return (
    <>
      <Navbarpages />
      <Menu />
      <MyPackages images={images} />
      <Contact_Packages image={contactImage} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  let images: string[] = [];
  let contactImage: string | null = null;

  try {
    // Fetch package images
    const packageQuery = `*[_type == "packages"]{ picture { asset->{url} } }`;
    const packageResults = await client.fetch<{ picture: { asset: { url: string } } }[]>(packageQuery);
    images = packageResults.map((result) => result.picture.asset.url);

    // Fetch contact image
    const contactQuery = `*[_type == "contact"][0]{ picture { asset->{url} } }`;
    const contactResult = await client.fetch<{ picture: { asset: { url: string } } }>(contactQuery);

    if (contactResult?.picture?.asset?.url) {
      contactImage = contactResult.picture.asset.url;
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images,
      contactImage,
    },
  };
};
