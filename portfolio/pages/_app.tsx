import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/homepage.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "../Components/navbar";
import theme from '../Components/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
