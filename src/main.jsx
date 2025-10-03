import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GuardianPage from "./GuardianPage";
import SimulationPage from "./SimulationPage";
import EducationPage from "./EducationPage";
import FamilyPage from "./FamilyPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guardian" element={<GuardianPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/family" element={<FamilyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);