import React from "react";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <div>
      <div>
        <div className="social">
          <p>*F*</p>
          <p>*G*</p>
          <p>*A*</p>
        </div>
        <p>OR</p>
        <form onSubmit={() => {}}>
          <input
            type={"text" || "email"}
            placeholder="Username or Email"
            value={username || email}
            onChange={(event) => {
              setUsername(event.target.value) || setEmail(event.target.value);
            }}
          />
          <input
            type={passwordVisibility === true ? "text" : "password"}
            placeholder="password"
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
    </div>
  );
}

export default Login;
