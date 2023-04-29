import React, { useState } from "react";
import TextField from "../../components/text-field/text-field";
import MainButton from "../../components/button/button";
import { Link } from "react-router-dom";
import "./UserLogin.css";
import logo from "../../images/logo-for-web.png";

const UserLoginPage = () => {
  const [signup, setSignup] = useState(false);
  // setSignup(false);

  // const SignUp = () => {
  //   setSignup(false);
  // };
  // SignUp();

  console.log(signup);

  return (
    <div className="user-login-page">
      <div className="user-login-background-effect-left"></div>

      <div className="user-login-page-container">
        <div className="user-login-page-image"></div>
        {!signup ? (
          <div className="user-login-page-form">
            <div className="user-login-page-logo">
              <img src={logo} width="100%" height="100%" />
            </div>
            <h2 className="user-login-page-title">Login</h2>
            <form className="user-login-page-inputs">
              <div className="user-login-page-email">
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Email"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div className="user-login-page-password">
                <TextField
                  type="password"
                  placeholder="Password"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div className="user-login-page-buttons">
                <MainButton name="Login" style={{ padding: "15px 20px" }} />
              </div>
              <div>
                <p
                  onClick={() => setSignup(true)}
                  className="user-login-page-signup-nav"
                >
                  Don't have an account? signup
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div
            className="user-login-page-form"
            style={{ padding: "20px 80px" }}
          >
            <div className="user-login-page-logo" style={{ marginBottom: 0 }}>
              <img
                src={logo}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2
              className="user-login-page-title"
              style={{ marginBottom: "30px" }}
            >
              Sign Up
            </h2>
            <form className="user-login-page-inputs">
              <div className="user-login-page-email">
                <TextField
                  type="text"
                  placeholder="Full Name"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="Address"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div>
                <TextField
                  type="email"
                  placeholder="Email"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div className="user-login-page-password">
                <TextField
                  type="password"
                  placeholder="Password"
                  style={{ fontSize: "16px", padding: "15px" }}
                />
              </div>
              <div className="user-login-page-buttons">
                <MainButton name="Sign Up" style={{ padding: "15px 20px" }} />
              </div>
              <div>
                <p
                  onClick={() => setSignup(false)}
                  className="user-login-page-signup-nav"
                >
                  Already have an account? login
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLoginPage;
