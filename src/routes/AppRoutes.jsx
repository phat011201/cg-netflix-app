import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/main/login/Login";
import Register from "../components/main/register/Register";
import Browse from "../components/main/browse/Browse";
import Introduction from "../components/introduction/Introduction";
import Manage from "../components/setting/profiles/manage";
import Restrictions from "../components/setting/profiles/restrictions";
import Watch from "../components/main/watch/Watch";
import ConfirmChangeAvt from "../components/setting/profiles/confirmChangeAvt";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />

      <Route path="/browse" element={<Browse />} />
      <Route path="/watch/:movieId" element={<Watch />} />

      <Route path="/profiles/manage" element={<Manage />} />
      <Route path="/confirm-change-avt" element={<ConfirmChangeAvt />} />

      <Route path="/settings/restrictions" element={<Restrictions />} />

      <Route path="/register/:step?" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/support" element={<div>Support</div>} />
    </Routes>
  );
};

export default AppRoutes;
