import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from "../../Html/html";
import { useEffect } from 'react';
import { appWithTranslation } from "next-i18next";
import Footer from '@/components/Footer/footer';
import { useRouter } from "next/router";
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/globals.css';
function App({ Component, pageProps }: AppProps) {

  //This Code Hides the Footer From Showing in the 404 Page
  const router = useRouter();
  const hideFooterPath = ['/404'];
  const Hide_Footer = hideFooterPath.includes(router.pathname);

  // For stopping menu scroll in mobile version
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#Menu') {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    });
  }, []);

  return (
    <>
      <Head />
      <Component {...pageProps} />
      {!Hide_Footer && <Footer />}
    </>
  );


}

export default appWithTranslation(App);