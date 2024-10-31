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
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" required placeholder="Your Name" />
          )}
          <input type="email" required placeholder="Your E-mail" />
          <input type="password" required placeholder="Your Password" />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup--condition">
          <input type="checkbox" required />
          <p>By continuing t, I agree to the terms of use & privacy polity.</p>
        </div>
        <p>
          Create a new account? <span>Click Here!</span>
        </p>
        <p>Already have a account ?<span>Login Here</span></p>
      </form>
    </div>
  );
};
