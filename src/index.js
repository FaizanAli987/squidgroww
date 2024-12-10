import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./style.css";
import Utilities from "./pages/Utilities";
import Press from "./pages/Press";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </Router>
  </StrictMode>
);
