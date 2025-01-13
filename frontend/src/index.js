import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

reportWebVitals();