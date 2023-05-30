import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  return (
    <div>
      <div className={location.pathname === "/home" ? "banner-home" : ""}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div
        className={location.pathname === "/about" ? "banner-about" : ""}
      ></div>
    </div>
  );
};

export default Banner;
