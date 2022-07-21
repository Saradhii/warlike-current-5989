import React from "react";
import { CartPageStyled } from "./CartPageStyled";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Image from "next/image";
import { product } from "../cartmenu/Cartmenu";
import axios from "axios";

const CartPage = () => {
  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>([]);

  React.useEffect(() => {
    const countTotal = () => {
      const t = cartData.reduce((a, el: product) => {
        a += el.quantity * el.price;
        return a;
      }, 0);
      setTotal(t);
    };

    countTotal();
  }, [cartData]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/cart/getCartData/${"12345devesh"}`)
      .then((res) => {
        console.log("res:", res);
        setCartData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CartPageStyled>
      <div className="cartDiv">
        <div className="heading">
          <h1>My Cart</h1>
        </div>

        <div className="cartDetails">
          <div className="cartProdutsList">
            <table>
              <thead>
                <tr>
                  <th className="image">Product</th>
                  <th className="item">&nbsp;</th>
                  <th className="qty">Qty</th>
                  <th className="price">Price</th>
                  <th className="remove"></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item: product, i: number) => (
                  <tr key={i}>
                    <td className="image">
                      <div className="product_image">
                        <a href="/products/c2p-pro-epic-matte-lip-ink-04-lustrous-fuschsia?variant=39557881102382">
                          <Image
                            width={"160px"}
                            height={"100%"}
                            src={item.image}
                            alt="C2P Pro Epic matte lip ink - 04 Lustrous Fuschsia"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="item">
                      <a href="/products">
                        <span className="lang1">{item.name}</span>
                      </a>
                    </td>
                    <td className="qty">
                      <input
                        type="text"
                        name="quantity"
                        defaultValue={item.quantity}
                        className="tc item-quantity"
                      />
                    </td>
                    <td className="price">
                      <span className="saso-cart-item-line-price">
                        Rs.{" "}
                        {(item.quantity * item.price).toLocaleString(
                          undefined,
                          { minimumFractionDigits: 2 }
                        )}
                      </span>
                    </td>
                    <td className="remove">
                      <a
                        className="remove-cart"
                        href="/cart/change?line=1&amp;quantity=0"
                      >
                        <CloseIcon />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cartButtons">
            <div className="summery">
              <p>Total Price :</p>
              <p>
                Rs.{" "}
                {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="btns">
              <button>Update Cart</button>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </CartPageStyled>
  );
};

export default CartPage;
