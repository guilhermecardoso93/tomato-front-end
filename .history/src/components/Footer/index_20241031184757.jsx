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
        <div className="footer-center"></div>
        <div className="footer-right"></div>
      </div>
    </footer>
  );
};