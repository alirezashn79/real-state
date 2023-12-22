import React, { useEffect, useState } from "react";
import Link from "next/link";

const Home = (props) => {
  const { id, img, title, location, roomCount, meterage, price } = props;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <svg className="card__like">
        <use href="/img/sprite.svg#icon-heart-full"></use>
      </svg>
      <div className="card__details">
        <svg className="card__icon">
          <use href="/img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p className="card__text">{location}</p>

        <svg className="card__icon">
          <use href="/img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p className="card__text">{roomCount} اتاق</p>

        <svg className="card__icon">
          <use href="/img/sprite.svg#icon-expand"></use>
        </svg>
        <p className="card__text">{meterage} متر مربع</p>

        <svg className="card__icon">
          <use href="/img/sprite.svg#icon-key"></use>
        </svg>
        <p className="card__text">{isClient && price.toLocaleString()} تومان</p>
      </div>

      <Link
        href={{
          pathname: "/homes/[id]",
          query: { id },
        }}
        className="btn btn-brown btn-card"
      >
        مشاهده ملک
      </Link>
    </div>
  );
};

export default Home;
