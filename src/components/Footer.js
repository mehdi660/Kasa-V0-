import React from "react";
import Logo from "../assets/img/Logo-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-ctnr">
        <img src={Logo} alt="logo-kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
