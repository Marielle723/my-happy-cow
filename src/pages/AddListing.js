import React from "react";
import { useState } from "react";
import Login from "../components/Login";
import member from "../assets/member.png";

function AddListing() {
  return (
    <div className="addListing-wrapper">
      <div
        className="addListing-bg"
        style={{
          backgroundImage: `url(${member})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>
          <strong>Login</strong>
        </p>
        <p>Login is required. It's free and ease</p>
      </div>

      <Login />
      <p>
        Dont have an account? <span>Register here</span>or
        <span>Validate account using code</span>
      </p>
      <p>
        If you have difficulty with this process, please
        <span>contact us</span>
      </p>
      <p>
        <span>Terms, Privacy and More</span>
      </p>
    </div>
  );
}

export default AddListing;
