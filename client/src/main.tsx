import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard/Dashboard";

import "./main.css";
import DashboardContentLayout from "./components/Dashboard/DashboardContent/DashboardContentLayout";
import DashboardIndex from "./components/Dashboard/DashboardIndex";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./components/LandingPage/Auth/Auth";
import Login from "./components/LandingPage/Auth/Login";
import Registrierung from "./components/LandingPage/Auth/Registrierung";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registrierung />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardIndex />} />
          <Route path=":category" element={<DashboardContentLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
