import React from "react";
import Header from "../components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
import { GetServerSideProps } from "next";
import { AppProvider } from "../Mycontext/context";
import client from "../sanity/sanity.client";
import About from "@/components/About/about";
import Services from "@/components/Services/services";
import MyGallery from "@/components/MyGallery/MyGallery";
import Contacts from "@/components/Contacts/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface Image {
  _id: string;
  url: string;
  alt: string;
}

interface HomePageProps {
  images: Image[];
  servicesImages: string[];
  Love: string[];
  Wedding: string[];
  Family: string[];
  Black_white: string[];
  translations: any;
}

const HomePage: React.FC<HomePageProps> = ({
  images,
  servicesImages,
  Love,
  Wedding,
  Family,
  Black_white,
}) => {
  return (
    <AppProvider value={{ images, isLoading: false }}>
      <Navbar />
      <Header />
      <section />
      <About />
      <section />
      <Services images={servicesImages} />
      <section />
      <MyGallery
        Love={Love}
        Wedding={Wedding}
        Family={Family}
        Black_white={Black_white}
      />
      <section />
      <Contacts />
    </AppProvider>
  );
};

// Fetch data server-side
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch translations and images
  let translations = {};
  const sliderQuery = `*[_type == "slider"] { _id, picture { asset->{url}, alt } }`;
  const servicesQuery = `*[_type == "services"]{ picture { asset->{url} } }`;
  const loveQuery = `*[_type == "love_card"]{ picture { asset->{url} } }`;
  const weddingQuery = `*[_type == "wedding_card"]{ picture { asset->{url} } }`;
  const familyQuery = `*[_type == "family_card"]{ picture { asset->{url} } }`;
  const blackWhiteQuery = `*[_type == "Black_white_card"]{ picture { asset->{url} } }`;

  let images: Image[] = [];
  let servicesImages: string[] = [];
  let Love: string[] = [];
  let Wedding: string[] = [];
  let Family: string[] = [];
  let Black_white: string[] = [];

  try {
    // Fetch translations
    translations = await serverSideTranslations(lang, ["Home"]);

    // Fetch slider images
    const sliderResult = await client.fetch<
      { _id: string; picture: { asset: { url: string }; alt: string } }[]
    >(sliderQuery);

    images = sliderResult.map((item) => ({
      _id: item._id,
      url: item.picture.asset.url,
      alt: item.picture.alt,
    }));

    // Fetch services images
    const servicesResult = await client.fetch<{ picture: { asset: { url: string } } }[]>(servicesQuery);
    servicesImages = servicesResult.map((result) => result.picture.asset.url);

    // Fetch gallery images
    Love = (await client.fetch<{ picture: { asset: { url: string } } }[]>(loveQuery)).map(
      (result) => result.picture.asset.url
    );
    Wedding = (await client.fetch<{ picture: { asset: { url: string } } }[]>(weddingQuery)).map(
      (result) => result.picture.asset.url
    );
    Family = (await client.fetch<{ picture: { asset: { url: string } } }[]>(familyQuery)).map(
      (result) => result.picture.asset.url
    );
    Black_white = (await client.fetch<{ picture: { asset: { url: string } } }[]>(blackWhiteQuery)).map(
      (result) => result.picture.asset.url
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      images,
      servicesImages,
      Love,
      Wedding,
      Family,
      Black_white,
      ...translations, 
    },
  };
};

export default HomePage;
