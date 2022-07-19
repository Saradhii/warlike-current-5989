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
    </>
  );
};

export default MainSlider;
