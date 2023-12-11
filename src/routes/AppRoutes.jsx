import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/main/login/Login"
import Register from "../components/main/register/Register"
import Browse from "../components/main/browse/Browse";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Introduction</div>} />

      <Route path="/browse" element={<Browse />} />

      <Route path="/register/:step?" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
