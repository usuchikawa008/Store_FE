import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";
import App2 from "./App2";
import 'font-awesome/css/font-awesome.min.css';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
);