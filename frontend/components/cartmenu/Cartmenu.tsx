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

type Anchor = "top" | "left" | "bottom" | "right";

type product = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartMenu = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [cartData, setCartData] = React.useState<product[]>([
    {
      image:
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_small.gif?v=1656064858",
      name: "The Beauty Bundle July Fab Bag",
      quantity: 1,
      price: 599,
    },
  ]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CartMenuStyled>
        <div className="continue-shoping">
          <span data-translate="header.my_cart">My Cart</span>
          <a>
            <CloseIcon />
          </a>
        </div>

        <List className="cart-list">
          {cartData &&
            cartData.map((el) => {
              return (
                <li key={el.name} className="item" id="cart-item">
                  <a
                    href="/"
                    title="The Beauty Bundle July Fab Bag"
                    className="product-image"
                  >
                    <Image
                      width={83}
                      height={52}
                      src={el.image}
                      alt="The Beauty Bundle July Fab Bag"
                    />
                  </a>
                  <div className="product-inner">
                    <p className="product-name">
                      <a href="/">
                        <span className="lang1">
                          The Beauty Bundle July Fab Bag
                        </span>
                        <span className="lang2">
                          The Beauty Bundle July Fab Bag
                        </span>
                      </a>
                    </p>
                    <div className="option"></div>
                    <div className="cart-collateral">
                      <span className="qty-cart" data-translate="header.qty">
                        Qty: 1
                      </span>
                      <span className="price">Rs. 599.00</span>
                    </div>
                  </div>
                  <a href="/" title="Remove Item" className="btn-remove">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="close"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                  </a>
                </li>
              );
            })}
        </List>

        <div className="wrap-btcart">
          <div className="summary">
            <p className="total">
              <span className="label" data-translate="header.total">
                Total:
              </span>
              <span className="price">Rs. 599.00</span>
            </p>
          </div>
          <div className="actions">
            <div className="view-cart">
              <a
                className="harman_btn4"
                href="/cart"
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
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartMenu;

// import { Button, Drawer, Space } from "antd";
// import type { DrawerProps } from "antd/es/drawer";
// import React, { useState } from "react";
// import { CartMenuStyled } from "./CartMenuStyled";

// const CartMenu: React.FC = () => {
//   const [visible, setVisible] = useState(false);

//   const showDefaultDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };
