import React, { useState } from "react";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Drawer from "./Drawer";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div>
        <h3>SUBSCRIBE NOW</h3>
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
          alt="img"
        />
      </div>
      <div>
        <span>
          <Drawer />
        </span>
        <span>
          <AiOutlineHeart />
        </span>
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaRegUserCircle />
          {isLoggedIn? 
         <span
         className={hover ? styles.afterDropDown : styles.beforeDropDown}
       >
         <label>
           Langauge: <span>En</span>
           <span>Fr</span>
         </label>
         <hr />
         <Link href="/">Checkout</Link>
         <hr />
         <Link href="/">Sing in</Link>
         <hr />
         <Link href="/">Create An Account</Link>
       </span> :
        <span
        className={hover ? styles.afterDropDown : styles.beforeDropDown}
      >
        <label>
          Langauge: <span>En</span>
          <span>Fr</span>
        </label>
        <hr />
        <Link href="/">Checkout</Link>
        <hr />
        <Link href="/">My Account</Link>
        <hr />
        <label  onClick={()=>setIsLoggedIn(true)}>Logout</label>
      </span>  
        }
         
        </span>

        <span>
          <AiOutlineShoppingCart />
        </span>
        <div className={styles.cartIteamsShow}>{0}</div>
      </div>
    </div>
  );
}
