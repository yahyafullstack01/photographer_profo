import About from "../components/About/about"
import Services from "../components/Services/services"
import MyGallery from "@/components/MyGallery/MyGallery"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { AppContext } from "../Mycontext/context";
import Header from "../components/Header/header";
import Navbar from "@/components/Header/Navbar/navbar";
import MyBlogs from "@/components/MyBlogs/MyBlogs";


export default function HomePage() {
  return (
    <AppContext.Provider value={{}}>
      <div>
        <Navbar />
        <Header />
        <section />
        <About />
        <section />
        <Services />
        <section />
        <MyGallery />
        <section />
        <MyBlogs />
        <section />
      </div>
    </AppContext.Provider>
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