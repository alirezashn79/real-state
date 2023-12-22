import React from "react";
import Home from "@/components/module/Home";
import db from "@/data/db.json";

const Homes = () => {
  return (
    <div className="homes">
      {db.homes.slice(0, 6).map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
};

export default Homes;
