import About from "../components/About/about"
import Services from "../components/Services/services"
import MyGallery from "@/components/MyGallery/MyGallery"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import 'react-loading-skeleton/dist/skeleton.css'

// import { AppContext } from "../Mycontext/context";
import Header from "../components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
// import Mystories from "@/components/MyStories/MyStories";
import Contacts from "@/components/Contacts/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <section />
      <About />
      <section />
      <Services />
      <section />
      <MyGallery />
      <section />
      {/* <Mystories /> */}
      {/* <section /> */}
      <Contacts />
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