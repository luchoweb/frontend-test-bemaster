import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./provider/AuthProvider.tsx";

// Pages
import App from "./App.tsx";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
