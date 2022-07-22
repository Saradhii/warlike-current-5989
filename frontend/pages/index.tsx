import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Button from "@mui/material/Button";
import { useState } from "react";
import MainSlider from "../components/Home/MainSlider";
import CartMenu from "../components/cartmenu/Cartmenu";
import Script from "next/script";

const Home: NextPage = () => {
  // For header copy them to header and implement it
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <div className={styles.container}>
      <Head>
        <title>FAB BAG</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LOGO_32x32.png?v=1548735766"
        />
      </Head>

      <main className={styles.main}>
        {/* For header copy them to header and implement it */}
        <Button onClick={() => setIsOpen(!isOpen)}>{"Cart Menu"}</Button>
        <CartMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </main>
      <div>
        <MainSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
