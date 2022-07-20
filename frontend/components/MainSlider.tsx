/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "../styles/Home.module.css";

const MainSlider = () => {
  return (
    <>
      <div className={style.MainSlider}></div>
      <div className={style.h3}>
        <h3>
          <span>WHAT'S IN MY BEAUTY BUNDLE</span>
        </h3>
      </div>
      <div className={style.beauty}>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_914eb815-9c7e-4ca1-ad10-39708a1afb45_2048x.png?v=1656613248" />
          </a>
          <h5>BEAUTY BUNDLE 1</h5>
        </div>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-02_a0530e7f-1a15-4464-9352-b976da7c39ec_2048x.png?v=1656613307" />
          </a>
          <h5>BEAUTY BUNDLE 2</h5>
        </div>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-03_d1a367d9-0873-4e30-b3a6-434ad508a503_2048x.png?v=1656613363" />
          </a>
          <h5>BEAUTY BUNDLE 3</h5>
        </div>
      </div>
      <div className={style.h3}>
        <h3>
          <span>SUBSCRIPTION</span>
        </h3>
      </div>
      <div className={style.subscription}>
        <div>
          <div>
            <h4>1 MONTH</h4>
            <p>SUBSCRIPTION</p>
          </div>
          <div>
            <h4>Rs. 599.00</h4>
            <p>/per month</p>
          </div>
          <div>
            <p>ONE TIME PAYMENT</p>
            <h4>Rs. 599.00</h4>
          </div>
          <div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={style.h3}>
        <h3>
          <span>PREVIOUS BAG</span>
        </h3>
      </div>
      <div className={style.prev}>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937" />
          <h3>Jun'22 The Make It Reign Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042"
            alt=""
          />
          <h3>May'22 The AweSummer May Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317"
            alt=""
          />
          <h3>Apr'22 The Sassy Spring Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494"
            alt=""
          />
          <h3>Mar'22 The Empow-HER Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
