import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

import loginbg from "../assets/login-social.jpg";

function Popup() {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  return (
    <div className="popup-wrapper">
      <div
        className="popup-imgbg"
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        <p className="popup-title">HappyCow</p>

        {login ? (
          <p className="popup-text">Welcome to HappyCow!</p>
        ) : (
          <p className="popup-text">
            Join the largest vegan and vegetarian community in the world.
          </p>
        )}
      </div>
      <div className="popup-form">
        <div className="popup-select">
          <p
            className="popup-log"
            onClick={() => {
              setSignup(false);
              setLogin(true);
            }}
          >
            Login
          </p>
          <p
            className="popup-sign"
            onClick={() => {
              setLogin(false);
              setSignup(true);
            }}
          >
            Sign-up
          </p>
        </div>

        {login ? <Login /> : signup ? <Signup /> : <Login />}
      </div>
    </div>
  );
}

export default Popup;
