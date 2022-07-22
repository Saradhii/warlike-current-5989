import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { CartMenuStyled } from "./CartMenuStyled";
import axios from "axios";

type Anchor = "right";

type propType = {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export type product = {
  _id: string;
  userid: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartMenu = ({ isOpen, toggleDrawer }: propType) => {
  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>([]);

  React.useEffect(() => {
    if (cartData || cartData === undefined) {
      return;
    }

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
      .get(
        `http://localhost:8080/cart/getCartData/${"62d977ac547497a0d835e4db"}`
      )
      .then((res) => {
        setCartData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const list = (anchor: Anchor) => (
    <Box sx={{ width: "auto" }} role="presentation">
      <CartMenuStyled>
        <div className="continue-shoping">
          <span data-translate="header.my_cart">My Cart</span>
          <a>
            <CloseIcon
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            />
          </a>
        </div>

        <List className="cart-list">
          {cartData &&
            cartData.map((el: product, i: number) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && <Divider sx={{ margin: "24px 0px" }} />}
                  <li className="item" id="cart-item">
                    <a
                      href="/"
                      title="The Beauty Bundle July Fab Bag"
                      className="product-image"
                    >
                      <Image
                        width={96}
                        height={96}
                        src={el.image}
                        alt="The Beauty Bundle July Fab Bag"
                      />
                    </a>
                    <div className="product-inner">
                      <p className="product-name">
                        <a href="/">
                          <span className="lang1">{el.name}</span>
                        </a>
                      </p>
                      <div className="option"></div>
                      <div className="cart-collateral">
                        <span className="qty-cart" data-translate="header.qty">
                          Qty: {el.quantity}
                        </span>
                        <span className="price">
                          Rs.{" "}
                          {el.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>
                    <a href="/" title="Remove Item" className="btn-remove">
                      <CloseIcon />
                    </a>
                  </li>
                </React.Fragment>
              );
            })}
        </List>

        <div className="wrap-btcart">
          <div className="summary">
            <p className="total">
              <span className="label" data-translate="header.total">
                Total:
              </span>
              <span className="price">
                Rs.{" "}
                {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </p>
          </div>
          <div className="actions">
            <div className="view-cart">
              <a
                className="harman_btn4"
                href="/Cart"
                data-translate="header.viewcart"
              >
                View Cart
              </a>
            </div>
            <button
              className="btn harman_btn4"
              data-translate="header.checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </CartMenuStyled>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default CartMenu;
