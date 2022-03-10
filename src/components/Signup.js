import React from "react";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <div>
      <div className="social">
        <p>*F*</p>
        <p>*G*</p>
        <p>*A*</p>
      </div>
      <p>OR</p>
      <form onSubmit={() => {}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p className="signupWarn">
          Publicly displayed. Do not use your email address as your username.
        </p>
        <input
          type={passwordVisibility === true ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="mem-password">
          <input type="checkbox" />
          <p>Forgot Password?</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
