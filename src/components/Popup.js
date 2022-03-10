import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

import loginbg from "../assets/login-social.jpg";
import { IoClose } from "react-icons/io5";

function Popup(props) {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [close, setClose] = useState(false);

  return props.trigger ? (
    <div className="popup-wrapper">
      <IoClose className="cross" onClick={() => props.setTrigger(false)} />
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
  ) : (
    ""
  );
}

export default Popup;
