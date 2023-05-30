import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/Navigation.css";
import "./styles/index.css";
import "./styles/Logo.css";
import "./styles/Header.css";
import "./styles/Banner.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
