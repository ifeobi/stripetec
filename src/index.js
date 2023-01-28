import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

let dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter
    onChange={(location) => {
      gtag("config", "G-CVYEN7LLNJ", { page_path: location.pathname });
    }}
  >
    <App />
  </HashRouter>
);
