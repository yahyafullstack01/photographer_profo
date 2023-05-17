import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from "../../Html/html"
import { useEffect } from 'react';
import { AppContext } from "../Mycontext/context";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {

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
    <AppContext.Provider value={{}}>
      <>
        <Head />
        <Component {...pageProps} />
      </>
    </AppContext.Provider>
  )
}
export default appWithTranslation(App);


