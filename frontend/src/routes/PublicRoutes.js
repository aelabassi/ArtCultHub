import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
import NftDetails from "../pages/NftDetails";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import Wallet from "../pages/Wallet";
import SignIn from "../pages/SignIn";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../App.css";

const PublicRoutes = () => {
  useEffect(() => {
    document.body.className = "public-theme"; // Optional: Add a class to the body for further styling.
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default PublicRoutes;