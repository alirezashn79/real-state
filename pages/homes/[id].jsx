import React from "react";
import styles from "@/styles/Home.module.css";
import db from "@/data/db.json";
import { useRouter } from "next/router";

function SingleHomeDetail() {
  const router = useRouter();
  const home = db.homes.find((home) => home.id === Number(router.query.id));

  return (
    <div className={styles.homeDetails}>
      <div className={styles.homeDetailsTop}>
        <div className={styles.homeImg}>
          <img src={home?.img} alt={home?.title} />
        </div>
        <div className={styles.homeInterduce}>
          <div className={styles.homeTitle}>
            <h1>
              <span>{home?.title}</span>
              <span>${home?.price.toLocaleString()} تومان</span>
            </h1>
            <div className={styles.tags}>
              {home?.isSpicial && (
                <span className={`${styles.tag} ${styles.greenTag}`}>ویژه</span>
              )}
              <span className={`${styles.tag} ${styles.brownTag}`}>
                برای اجاره
              </span>
            </div>
            <div>آدرس : {home?.location}</div>
          </div>
          <div className={styles.homeReview}>
            <div className={styles.homeReviewTop}>
              <h2>مرور کلی</h2>
              <p>
                <span>کد ملک : </span>
                <span>{home?.code}</span>
              </p>
            </div>
            <ul className={styles.homeReviewBottom}>
              <li>
                <span>نوع ملک: </span>
                <span>مغازه</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{home?.roomCount}</span>
              </li>
              <li>
                <span>متراژ: </span>
                <span>{home?.meterage}</span>
              </li>
              <li>
                <span>سال ساخت: </span>
                <span>1402</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.homeDetailsDescription}>
          <p>توضیحات</p>
          <p>{home?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleHomeDetail;
