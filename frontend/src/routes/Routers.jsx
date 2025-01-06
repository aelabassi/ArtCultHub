import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import NftDetails from "../pages/NftDetails";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import Wallet from "../pages/Wallet";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
};

export default Routers;
