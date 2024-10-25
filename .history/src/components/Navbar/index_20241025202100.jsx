import { useState } from "react";
import { assets } from "../../assets/assets";
import "./styles.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "Home" ? "active" : ""}>Home</li>
        <li className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li className={menu === "MobileApp" ? "active" : ""}>MobileApp</li>
        <li className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};
