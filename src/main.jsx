import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import "./index.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coffe from "./components/Coffe/Coffe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/coffe/:id" element={<Coffe />} />
          </Routes>
    </Router>
  </React.StrictMode>
);
