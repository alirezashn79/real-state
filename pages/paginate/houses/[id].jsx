import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import db from "@/data/db.json";
import Home from "@/components/module/Home";
import styles from "@/styles/Homes.module.css";
function PaginateHouse() {
  const router = useRouter();
  const [homes, setHomes] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const paginate = () => {
      router.push({
        pathname: "/paginate/houses/[id]",
        query: {
          id: activePage,
        },
      });
      const endIdx = activePage * 3;
      const startIdx = endIdx - 3;

      const newHomes = db.homes.slice(startIdx, endIdx);
      setHomes(newHomes);
    };
    paginate();
  }, [activePage]);

  if (Number(router.query.id) > Math.ceil(db.homes.length / 3)) {
    return <h1>Not Found</h1>;
  }

  return (
    <div className={styles.homeSection} id="houses">
      <div className={styles.homeFilterSearch}>
        <div className={styles.homeFilter}>
          <select>
            <option value="">انتخاب کنید</option>
            <option value="">بر اساس قیمت</option>
            <option value="">بر اساس تعداد اتاق</option>
            <option value="">بر اساس آدرس</option>
          </select>
        </div>
        <div className={styles.homeSearch}>
          <input type="text" placeholder="جستجو کنید" />
        </div>
      </div>
      <div className={styles.homes}>
        {homes.map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
      <ul className={styles.pagination_list}>
        {activePage !== 1 && (
          <li
            onClick={() => setActivePage(activePage - 1)}
            className={styles.pagination_item}
          >
            {"<"}
          </li>
        )}
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, idx) => {
            return (
              <li
                onClick={() => setActivePage(idx + 1)}
                key={idx}
                className={`${styles.pagination_item} ${
                  activePage === idx + 1 && styles.active
                }`}
              >
                {idx + 1}
              </li>
            );
          },
        )}
        {Math.ceil(db.homes.length / 3) !== activePage && (
          <li
            onClick={() => setActivePage(activePage + 1)}
            className={styles.pagination_item}
          >
            {">"}
          </li>
        )}
      </ul>
    </div>
  );
}

export default PaginateHouse;
