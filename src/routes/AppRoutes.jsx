import React from "react";
import { Routes, Route } from "react-router-dom";

import { HEADTITLE } from "../constants/constant";

import Login from "../components/main/login/Login";
import Register from "../components/main/register/Register";
import Browse from "../components/main/browse/Browse";
import Introduction from "../components/introduction/Introduction";
import Manage from "../components/setting/profiles/manage";
import Restrictions from "../components/setting/profiles/restrictions";
import Watch from "../components/main/watch/Watch";
import ContactUs from "../components/contactus/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />

      {HEADTITLE.map((item, index) => {
        return <Route path={item.path} key={index} element={<Browse />} />;
      })}

      <Route path="/watch/:movieId" element={<Watch />} />

      <Route path="/profiles/manage" element={<Manage />} />

      <Route path="/settings/restrictions" element={<Restrictions />} />

      <Route path="/register/:step?" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/support" element={<div>Support</div>} />
      
      <Route path="/contactus" element={<div><ContactUs /></div>} />
    </Routes>
  );
};

export default AppRoutes;
