import Nav from "@/components/Navbar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextNProgress color="#9333ea" />
      <Nav />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
