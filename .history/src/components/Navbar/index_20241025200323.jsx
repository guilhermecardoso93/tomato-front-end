import { assets } from "../../assets/assets";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt='' />
        </div>
      </div>
    </div>
  );
};
