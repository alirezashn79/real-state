import React, { useEffect, useState } from "react";
import styles from "@/styles/Homes.module.css";
import db from "@/data/db.json";
import Home from "@/components/module/Home";
import pages from "@/pages";

function AllHomesPage() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState("-1");
  const [activePage, setActivePage] = useState(1);
  const homeSlidesCount = 3;

  useEffect(() => {
    const newHomes = db.homes.filter(
      (item) => item.title.includes(search) || item.location.includes(search),
    );
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    let newHomes;
    switch (sort) {
      case "price": {
        newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }

      case "room": {
        newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);

  const paginateHandler = (page) => {
    const endIdx = page * homeSlidesCount;
    const startIdx = endIdx - homeSlidesCount;
    const newHomes = [...db.homes].slice(startIdx, endIdx);
    setActivePage(page);
    setHomes(newHomes);
  };

  const nextOrPrevHandler = (type) => {
    let startIdx, endIdx, newHomes;

    switch (type) {
      case "next": {
        if (Math.ceil(db.homes.length / homeSlidesCount) !== activePage) {
          startIdx = activePage * homeSlidesCount;
          endIdx = startIdx + homeSlidesCount;
          newHomes = [...db.homes].slice(startIdx, endIdx);
          setActivePage(activePage + 1);
          setHomes(newHomes);
        }

        break;
      }

      case "prev": {
        if (activePage !== 1) {
          endIdx = (activePage - 1) * homeSlidesCount;
          startIdx = endIdx - homeSlidesCount;

          newHomes = [...db.homes].slice(startIdx, endIdx);

          setActivePage(activePage - 1);
          setHomes(newHomes);
        }
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className={styles.homeSection} id="houses">
      <div className={styles.homeFilterSearch}>
        <div className={styles.homeFilter}>
          <select defaultValue="-1" onChange={(e) => setSort(e.target.value)}>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اسا قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className={styles.homeSearch}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div className={styles.homes}>
        {homes.slice(0, homeSlidesCount).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
      <ul className={styles.pagination_list}>
        {activePage !== 1 && (
          <li
            onClick={nextOrPrevHandler.bind(null, "prev")}
            className={styles.pagination_item}
          >
            {"<"}
          </li>
        )}
        {Array.from({
          length: Math.ceil(db.homes.length / homeSlidesCount),
        }).map((item, idx) => {
          return (
            <li
              onClick={paginateHandler.bind(null, idx + 1)}
              key={idx}
              className={`${styles.pagination_item} ${
                activePage === idx + 1 && styles.active
              }`}
            >
              {idx + 1}
            </li>
          );
        })}
        {Math.ceil(db.homes.length / homeSlidesCount) !== activePage && (
          <li
            onClick={nextOrPrevHandler.bind(null, "next")}
            className={styles.pagination_item}
          >
            {">"}
          </li>
        )}
      </ul>
    </div>
  );
}

export default AllHomesPage;
