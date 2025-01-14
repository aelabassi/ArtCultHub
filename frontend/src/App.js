import React from "react";
import { useAuth } from "./context/AuthContext";
import PublicRoutes from "./routes/PublicRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

const App = () => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <DashboardRoutes /> : <PublicRoutes />;
};

export default App;
