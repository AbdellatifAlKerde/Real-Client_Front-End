import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLogin/AdminLogin.js";
import UserLoginPage from "./pages/UserLogin/UserLogin.js";
import UserSignupPage from "./pages/UserSignup/UserSignup.js";
import HomePage from "./pages/Home/Home.js";
import ContactUsPage from "./pages/ContactUs/ContactUs.js";
import ProductsPage from "./pages/Products/Products.js";
import TrainingPage from "./pages/Training/Training.js";
import DashboardPage from "./pages/Dashboard/Dashboard.js";
import NotFound from "./pages/NotFound/NotFound.js";
import PrivateRoutes from "./utils/privateRoutes";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route exact path="/" element={<HomePage />} />
          <Route path="admin-login" element={<AdminLoginPage />} />
          <Route path="user-login" element={<UserLoginPage />} />
          <Route path="user-signup" element={<UserSignupPage />} />
          <Route path="home-page" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
