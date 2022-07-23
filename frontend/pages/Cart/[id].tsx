import axios from "axios";
import React from "react";
import CartPage from "../../components/cart/CartPage";
import Header from "../../components/header/Header";
import Footer from "../components/Footer";

const cart = ({ Data }: any) => {
  return (
    <>
      <Header />
      <CartPage Data={Data} />
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const data = await axios
    .get(`http://localhost:8080/cart/getCartData/${context.query.id}`)
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((err) => console.log(err));

  return { props: { Data: { data } } };
};

export default cart;
