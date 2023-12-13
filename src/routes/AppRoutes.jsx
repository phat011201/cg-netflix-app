import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/main/login/Login"
import Register from "../components/main/register/Register"
import Browse from "../components/main/browse/Browse";
import Introduction from "../components/introduction/Introduction";
import Manage from "../components/setting/profiles/manage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />

      <Route path="/browse" element={<Browse />} />
      <Route path="/watch/:movieId" element={<div>Watch</div>} />

      <Route path="/manage-profiles" element={<Manage />} />

      <Route path="/register/:step?" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
