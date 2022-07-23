import Link from "next/link";
import React from "react";
import styles from "../../styles/header.module.css";
export default function Search({ data }: any) {
  return (
    <>
      {data.map((ele: any) => {
        return (
          <div className={styles.childsearch} key={ele._id}>
            <Link href={`/product/${ele._id}`}>
              <img src={ele.image} />
              <div>
                <p>{ele.title}</p>

                <span>{`₹${ele.price}`}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
