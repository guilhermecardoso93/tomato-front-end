import { assets } from "../../assets/assets";
import "./styles.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsimdihfaihfiasbdnfiasbndifonasdifnadfionasdofnaio</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-2222-2222</li>
            <li>tomato@restaurant.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-rights">
        Copyrights 2024 Tomato.com - All rights reserved.
      </p>
    </footer>
  );
};
