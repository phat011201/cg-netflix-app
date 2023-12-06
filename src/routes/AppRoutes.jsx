import React from "react";
import { Routes, Route } from "react-router-dom";

import BrowsePage from "../components/mainPage/browsePage/BrowsePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Introduction</div>} />

      <Route path="/browse" element={<BrowsePage />} />

      <Route path="/register" element={<div>Register</div>} />

      <Route path="/login" element={<div>Login</div>} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
