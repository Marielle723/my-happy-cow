import React from "react";
import { useState } from "react";

import facebook from "../assets/social/facebook.png";
import google from "../assets/social/google.png";
import apple from "../assets/social/apple.png";

import { IoClose } from "react-icons/io5";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    alert("Submit");
    //requête axios vers une route userSignup
  };

  return (
    <div className="login-signup-wrapper">
      <div className="social">
        <img src={facebook} alt="blue f letter-facebook logo" />
        <img src={google} alt="multicolored g letter-google logo" />
        <img src={apple} alt="dark grey hidden apple apple logo" />
      </div>
      <p>OR</p>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <label>
          Email <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>

        <label>
          Username <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <p className="signupWarn">
          Publicly displayed. Do not use your email address as your username.
        </p>
        <label>
          Password
          <input
            type={passwordVisibility === true ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <div className="mem-password">
          <label>
            <input type="checkbox" value={() => setChecked(!checked)} />
            Remember me
          </label>
          <p>Forgot Password?</p>
        </div>
        <input className="submit-signup" type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Signup;
