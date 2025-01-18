import React from "react";
import Header from "../components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { AppProvider } from "../Mycontext/context";
import client from "../sanity/sanity.client";
import About from "@/components/About/about";
import Services from "@/components/Services/services";
import MyGallery from "@/components/MyGallery/MyGallery";
import Contacts from "@/components/Contacts/contact";

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
      <MyGallery Love={Love} Wedding={Wedding} Family={Family} Black_white={Black_white} />
      <section />
      <Contacts />
    </AppProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const lang = locale ?? "en";

  // Fetch images for Header
  const sliderQuery = `*[_type == "slider"] { _id, picture { asset->{url}, alt } }`;
  let images: Image[] = [];

  // Fetch images for Services
  const servicesQuery = `*[_type == "services"]{ picture { asset->{url} } }`;
  let servicesImages: string[] = [];

  // Fetch images for MyGallery
  let Love: string[] = [];
  let Wedding: string[] = [];
  let Family: string[] = [];
  let Black_white: string[] = [];

  try {
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

    // Fetch Love images
    const loveQuery = `*[_type == "love_card"]{ picture { asset->{url} } }`;
    const loveResults = await client.fetch<{ picture: { asset: { url: string } } }[]>(loveQuery);
    Love = loveResults.map((result) => result.picture.asset.url);

    // Fetch Wedding images
    const weddingQuery = `*[_type == "wedding_card"]{ picture { asset->{url} } }`;
    const weddingResults = await client.fetch<{ picture: { asset: { url: string } } }[]>(weddingQuery);
    Wedding = weddingResults.map((result) => result.picture.asset.url);

    // Fetch Family images
    const familyQuery = `*[_type == "family_card"]{ picture { asset->{url} } }`;
    const familyResults = await client.fetch<{ picture: { asset: { url: string } } }[]>(familyQuery);
    Family = familyResults.map((result) => result.picture.asset.url);

    // Fetch Black and White images
    const blackWhiteQuery = `*[_type == "Black_white_card"]{ picture { asset->{url} } }`;
    const blackWhiteResults = await client.fetch<{ picture: { asset: { url: string } } }[]>(blackWhiteQuery);
    Black_white = blackWhiteResults.map((result) => result.picture.asset.url);
  } catch (error) {
    console.error("Error fetching data from Sanity.io:", error);
  }

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
      images,
      servicesImages,
      Love,
      Wedding,
      Family,
      Black_white,
    },
  };
};

export default HomePage;