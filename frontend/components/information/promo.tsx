import { Divider, List } from "@mui/material";
import Image from "next/image";
import React from "react";
import { product } from "../cartmenu/Cartmenu";
import { PromoDiv } from "./formStyled";
import InputComp from "./InputComp";

const Promo = () => {
  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>([
    {
      _id: "4654",
      price: 1199,
      image:
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/c2p-pro-epic-matte-lip-ink-set-3_e9cae271-12b2-41a1-8630-1c7d86eb06f4_small.png?v=1653389987",
      quantity: 1,
      name: "C2P Pro Epic Matte Lip Ink Set",
      userid: "fds4413",
    },
    {
      _id: "dgsew",
      price: 599,
      image:
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_small.gif?v=1656064858",
      quantity: 5,
      name: "The Beauty Bundle July Fab Bag",
      userid: "2edsge",
    },
    {
      _id: "fdsgbs",
      price: 1199,
      image:
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/c2p-pro-epic-matte-lip-ink-set-4_small.jpg?v=1634904385",
      quantity: 5,
      name: "C2P Pro Epic matte lip ink - 04 Lustrous Fuschsia",
      userid: "fsvwwr2",
    },
  ]);

  return (
    <PromoDiv>
      <div>
        <List className="cart-list">
          {cartData.length === 0
            ? "You have no items in your shopping cart."
            : cartData.map((el: product, i: number) => {
                return (
                  <React.Fragment key={i}>
                    <li className="item" id="cart-item">
                      <a
                        href="/"
                        title="The Beauty Bundle July Fab Bag"
                        className="product-image"
                      >
                        <div className="product-thumbnail ">
                          <div className="product-thumbnail__wrapper">
                            <Image
                              width={86}
                              height={86}
                              src={el.image}
                              alt="The Beauty Bundle July Fab Bag"
                            />
                          </div>
                          <span className="product-thumbnail__quantity">
                            {el.quantity}
                          </span>
                        </div>
                      </a>
                      <div className="product-inner">
                        <p className="product-name">
                          <a href="/">
                            <span className="lang1">{el.name}</span>
                          </a>
                        </p>
                      </div>
                      <div className="cart-collateral">
                        <span className="price">
                          ₹{" "}
                          {el.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
        </List>
      </div>

      <div className="discountInput">
        <InputComp label="Discount code" />
        <button>Apply</button>
      </div>

      <div className="order-summary">
        <div className="summary">
          <p>
            <span>Subtotal</span>
            <span>₹2,997.00</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </p>
        </div>

        <div className="total">
          <p>
            <span>Total</span>
            <span>
              <span className="currency">
                INR
              </span>{" "}
              ₹2,997.00
            </span>
          </p>
        </div>
      </div>
    </PromoDiv>
  );
};

export default Promo;
