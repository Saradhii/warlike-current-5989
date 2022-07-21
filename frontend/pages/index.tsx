import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CartMenu from "./../components/cartmenu/CartMenu";
import jwt_decode from "jwt-decode";
import MainSlider from "../components/Home/MainSlider";

const Home: NextPage = () => {
  var decoded = jwt_decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoic2FyYWRoaSIsImxhc3RfbmFtZSI6Im1vcGFkYSIsImlkIjoiNjJkN2YyYjc3YzEzMjQyOGFhNzYwOGIxIiwiaWF0IjoxNjU4MzI5MDMwLCJleHAiOjE2NTgzMjkwOTB9.0CCelq1Ktevn1al9d9WqyH3RuXY0nrBx78OWzuKXHlg"
  );

  console.log(decoded);

  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <CartMenu />
      </main>
    <div>
      <MainSlider/>
    </div>
    </div>
  );
};

export default Home;
