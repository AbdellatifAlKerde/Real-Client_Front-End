import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const isAuthenticated = localStorage.getItem("admin-token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" />;
}

export default PrivateRoutes;
