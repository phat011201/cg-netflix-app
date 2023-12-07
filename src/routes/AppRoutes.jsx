import React from "react";
import { Routes, Route } from "react-router-dom";

import BrowsePage from "../components/mainPage/browsePage/BrowsePage";
import RegisterPage from "../components/mainPage/registerPage/RegisterPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Introduction</div>} />

      <Route path="/browse" element={<BrowsePage />} />

      <Route path="/register/:step?" element={<RegisterPage />} />

      <Route path="/login" element={<div>Login</div>} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
