import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from "../../Html/html"
import { useEffect } from 'react';
import { appWithTranslation } from "next-i18next";
import Footer from '@/components/Footer/footer';


function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // For stopping menu scroll in mobile version
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
      <Footer />
    </>
  );
}

export default appWithTranslation(App);


