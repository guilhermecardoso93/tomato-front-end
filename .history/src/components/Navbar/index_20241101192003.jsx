import { useState } from "react";
import { assets } from "../../assets/assets";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = ({ login, setLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("MobileApp")}
          className={menu === "MobileApp" ? "active" : ""}
        >
          MobileApp
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setLogin(true)}>sign in</button>
      </div>
    </div>
  );
};
