import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./index.css"; // 追加
// import Navbar from "./components/Navbar";
import About2 from "./components/About2";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes> */}
    <App />
    {/* <Route path="/about2" element={<About2 />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
