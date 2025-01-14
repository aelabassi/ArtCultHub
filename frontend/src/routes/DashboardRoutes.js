import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import "../Dash.css";
import "../index.css";

const DashboardRoutes = () => {
  useEffect(() => {
    document.body.classList.add("App", "dashboard-theme"); // Add both classes
    return () => {
      document.body.classList.remove("App", "dashboard-theme"); // Remove them when component unmounts
    };
  }, []);

  return (
    <div className="dashboard-container">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default DashboardRoutes;