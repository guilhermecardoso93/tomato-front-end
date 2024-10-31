import { assets } from "../../assets/assets";
import "./styles.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={assetss.logo} alt="" />
        </div>
        <div className="footer-center"></div>
        <div className="footer-right"></div>
      </div>
    </footer>
  );
};
