import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppPovider } from "./context";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <AppPovider>
      <App />
    </AppPovider>
  </React.StrictMode>,
  document.getElementById("root")
);
