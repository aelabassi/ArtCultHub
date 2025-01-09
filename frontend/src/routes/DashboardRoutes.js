import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import "../Dash.css";
import "../index.css";

const DashboardRoutes = () => {
  useEffect(() => {
    document.body.className = "dashboard-theme"; // Optional: Add a class to the body for further styling.
    return () => {
      document.body.className = "";
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
