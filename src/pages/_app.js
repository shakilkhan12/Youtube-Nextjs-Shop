import Nav from "@/components/Navbar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";
import CartProvider from "@/context/CartContext";
import Cart from "@/components/Cart";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <CartProvider>
        <Cart />
        <NextNProgress color="#9333ea" />
        <Nav />
        <Component {...pageProps} />
      </CartProvider>
    </NextUIProvider>
  );
}
