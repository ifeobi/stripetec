import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import Analytics from 'react-analytics';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Analytics id='G-CVYEN7LLNJ'>
  <HashRouter>
    <App />
  </HashRouter>
  </Analytics>
);
