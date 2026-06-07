import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
