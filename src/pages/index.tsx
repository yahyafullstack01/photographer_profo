import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
import About from "@/components/About/about";
import Services from "@/components/Services/services";
import MyGallery from "@/components/MyGallery/MyGallery";
import Contacts from "@/components/Contacts/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyGallery />
      <Contacts />
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(lang, ["Home"])),
    },
  };
};
