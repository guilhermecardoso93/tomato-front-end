import { useState } from "react";
import { assets } from "../../assets/assets";

export const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} alt='' />
        </div>
      </form>
    </div>
  );
};
