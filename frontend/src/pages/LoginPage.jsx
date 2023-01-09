import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../api/users.api";

import "../styles/login.css";

function LoginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async () => {
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("user_token", data.response.token);
      toast.success("You are logged in.");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="input-container">
        <label>Email </label>
        <input
          type="text"
          name="uname"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
          type="password"
          name="pass"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {renderForm}
        <p className="forgot-password text-center mt-4">
          Create Account{" "}
          <a
            onClick={() => {
              navigate("/signup");
            }}
            style={{ color: "blue" }}
          >
            sign up?
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
