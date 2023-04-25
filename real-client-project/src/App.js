import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLogin/AdminLogin.js";
import ContactUsPage from "./pages/ContactUs/ContactUs";
import UserLoginPage from "./pages/UserLogin/UserLogin.js";
import UserSignupPage from "./pages/UserSignup/UserSignup.js";
import HomePage from "./pages/Home/Home.js";
import DashboardPage from "./pages/Dashboard/Dashboard.js";
import NotFound from "./pages/NotFound/NotFound.js";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="admin-login" element={<AdminLoginPage />} />
            <Route path="user-login" element={<UserLoginPage />} />
            <Route path="user-signup" element={<UserSignupPage />} />
            <Route path="home-page" element={<HomePage />} />
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
