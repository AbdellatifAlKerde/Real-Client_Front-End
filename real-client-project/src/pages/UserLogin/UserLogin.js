import React, { useState, useEffect } from "react";
import TextField from "../../components/text-field/text-field";
import MainButton from "../../components/button/button";
import { Link } from "react-router-dom";
import "./UserLogin.css";
import logo from "../../images/logo-for-web.png";
import axios from "axios";

const UserLoginPage = () => {
  const [signup, setSignup] = useState(false);
  const [userSignup, setUserSignup] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleSignUpChange = (event) => {
    const value = event.target.value;
    setUserSignup({ ...userSignup, [event.target.name]: value });
  };

  const handleLoginChange = (event) => {
    const value = event.target.value;
    setUserLogin({ ...userLogin, [event.target.name]: value });
  };

  const SignUp = async () => {
    const signUp = {
      fullName: userSignup.fullName,
      address: userSignup.address,
      phoneNumber: userSignup.phoneNumber,
      email: userSignup.email,
      password: userSignup.password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/register`,
        signUp
      );
      console.log(process.env.REACT_APP_API_URL);
      console.log(response);
      // setSignup(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const Login = async () => {
    const login = {
      email: userLogin.email,
      password: userLogin.password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        login
      );
      // console.log(process.env.REACT_APP_API_URL);
      console.log(response);
      // console.log(response.message);
      // setSignup(false);
    } catch (e) {
      console.log(e.message);
    }
  };

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
                  required={true}
                  style={{ fontSize: "16px", padding: "15px" }}
                  name="email"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="user-login-page-password">
                <TextField
                  label="Password"
                  type="password"
                  required={true}
                  style={{ fontSize: "16px", padding: "15px" }}
                  name="password"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="user-login-page-buttons">
                <MainButton
                  name="Login"
                  style={{ padding: "15px 20px" }}
                  onClick={(e) => {
                    Login();
                    e.preventDefault();
                  }}
                />
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
            // style={{ padding: "20px 80px" }}
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
            <form className="user-login-page-inputs" style={{ gap: "20px" }}>
              <div className="user-login-page-email">
                <TextField
                  label="Full Name"
                  type="text"
                  required={true}
                  style={{ fontSize: "16px", padding: "15px" }}
                  name="fullName"
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="user-login-page-address-phone">
                <div>
                  <TextField
                    label="Address"
                    type="text"
                    required={true}
                    style={{ fontSize: "16px", padding: "15px" }}
                    name="address"
                    onChange={handleSignUpChange}
                  />
                </div>
                <div>
                  <TextField
                    label="Phone"
                    type="tel"
                    required={true}
                    style={{ fontSize: "16px", padding: "15px" }}
                    name="phoneNumber"
                    onChange={handleSignUpChange}
                  />
                </div>
              </div>
              <div>
                <TextField
                  label="Email"
                  type="email"
                  required={true}
                  style={{ fontSize: "16px", padding: "15px" }}
                  name="email"
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="user-login-page-password">
                <TextField
                  label="Password"
                  type="password"
                  required={true}
                  style={{ fontSize: "16px", padding: "15px" }}
                  name="password"
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="user-login-page-buttons">
                <MainButton
                  name="Sign Up"
                  style={{ padding: "15px 20px" }}
                  onClick={(e) => {
                    SignUp();
                    e.preventDefault();
                  }}
                />
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
