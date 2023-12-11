import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/main/browse/header/Navbar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Introduction</div>} />

      <Route path="/browse" element={<Navbar />} />

      <Route path="/register" element={<div>Register</div>} />

      <Route path="/login" element={<div>Login</div>} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
