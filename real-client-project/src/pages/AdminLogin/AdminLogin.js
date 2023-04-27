import React, { useState } from "react";
import "./AdminLogin.css";
import TextField from "../../components/text-field/text-field";
import MainButton from "../../components/button/button";
import logo from "../../images/RMZNA-logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    const value = event.target.value;
    setLogin({ ...login, [event.target.name]: value });
  };

  const Login = async () => {
    const loginData = {
      email: login.email,
      password: login.password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/login`,
        loginData
      );

      if (response.status == 200) {
        console.log(response.data.token);
        localStorage.setItem("admin-token", response.data.token);

        navigate("/dashboard");
      } else {
        console.error(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-logo">
          <img
            src={logo}
            alt="RMZNA logo"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2>Login</h2>
        <div className="admin-login-form">
          <div>
            <TextField
              type="email"
              style={{ width: "100%" }}
              id="email"
              label="Email"
              name="email"
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <TextField
              type="password"
              style={{ width: "100%" }}
              id="password"
              label="Password"
              name="password"
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <MainButton
              name="Login"
              style={{ width: "100%", padding: "15px 0" }}
              onClick={(e) => {
                e.preventDefault();
                Login();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
