import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import Cartmenu from "../Components/cartmenu/Cartmenu";
import styles from "../styles/Home.module.css";
import 'antd/dist/antd.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>F</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
             {/* <Cartmenu /> */}
      </main>   
    </div>
  );
};

export default Home;
