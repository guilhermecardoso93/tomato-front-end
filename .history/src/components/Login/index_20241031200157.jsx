import { useState } from "react";
import { assets } from "../../assets/assets";

export const Login = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setLogin(false)} />
        </div>
        <div className="login-popup-input">
          <input type="text" required placeholder="Your Name" />
          <input type="email" required placeholder="Your E-mail" />
        </div>
      </form>
    </div>
  );
};
