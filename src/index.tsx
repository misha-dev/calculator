import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CalcContextProvider } from "./context/CalcContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CalcContextProvider>
      <App />
    </CalcContextProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
