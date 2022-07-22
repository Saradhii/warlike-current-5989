import axios from "axios";
import React from "react";
import CartPage from "../../components/cart/CartPage";

const cart = ({ Data }: any) => {
  return <CartPage Data={Data} />;
};

export const getServerSideProps = async (context:any) => {
  const data = await axios
    .get(`http://localhost:8080/cart/getCartData/${"62d977ac5474e7d0d835e4dc" || context.query.id}`)
    .then((res) => {
      if (res.data.data !== null) {
        return res.data.data;
      } else {
        return null;
      }
    })
    .catch((err) => console.log(err));

  return { props: { Data: { data } } };
};

export default cart;
