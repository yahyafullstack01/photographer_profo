import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from "../../Html/html"
import Header from "../components/Header/header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
