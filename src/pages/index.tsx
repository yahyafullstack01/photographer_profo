import About from "../components/About/about"
import Services from "../components/Services/services"
import MyGallery from "@/components/MyGallery/MyGallery"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { AppContext } from "../Mycontext/context";
import Header from "../components/Header/header";


export default function HomePage() {
  const { t } = useTranslation("Home");
  return (
    <AppContext.Provider value={{}}>
    <div>
      <Header />
      <section />
      <About />
      <section />
      <Services />
      <section />
      <MyGallery />
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