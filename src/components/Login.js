import React from "react";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io";

import facebook from "../assets/social/facebook.png";
import google from "../assets/social/google.png";
import apple from "../assets/social/apple.png";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    alert("Submit Login");
    //requête vers user login
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
          Username or Email <br />
          <input
            type={"text" || "email"}
            placeholder="Username or Email"
            value={username || email}
            onChange={(event) => {
              setUsername(event.target.value) || setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password <br />
          <input
            type={passwordVisibility === true ? "text" : "password"}
            placeholder="password"
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
        <input className="submit-login" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
