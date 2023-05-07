import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from "../../Html/html"
import { useEffect } from 'react';
import Header from "../components/Header/header"

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    //for stopping menu scroll in mobile version
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
      <Header />
      <Component {...pageProps} />
    </>
  )
}
