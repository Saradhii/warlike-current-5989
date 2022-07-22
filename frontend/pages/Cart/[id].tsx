import axios from "axios";
import React from "react";
import CartPage from "../../components/cart/CartPage";

const cart = ({ Data }: any) => {
  return <CartPage Data={Data} />;
};

export const getServerSideProps = async (context: any) => {
  const data = await axios
    .get(`http://localhost:8080/cart/getCartData/${"62d977ac547498a0d835e4dc"}`)
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
