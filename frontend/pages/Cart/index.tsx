import axios from "axios";
import React from "react";
import CartPage from "../../components/cart/CartPage";

const cart = ({ Data }: any) => {
  return <CartPage Data={Data} />;
};

export const getServerSideProps = async () => {
  const data = await axios
    .get("http://localhost:8080/cart/getCartData/62d977ac5474e7d0d835e4dc")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));

  console.log("data:", data);
  return { props: { Data: { data } } };
};

export default cart;
