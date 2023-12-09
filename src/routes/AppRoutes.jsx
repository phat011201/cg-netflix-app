import React from "react";
import { Routes, Route } from "react-router-dom";

// import Browse from "../components/mainPage/browse/Browse";
import Manage from "../components/setting/profiles/manage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<div>Introduction</div>} /> */}

      <Route path="/" element={<Manage />} />

      {/* <Route path="/browse" element={<Browse />} /> */}

      <Route path="/register" element={<div>Register</div>} />

      <Route path="/login" element={<div>Login</div>} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
