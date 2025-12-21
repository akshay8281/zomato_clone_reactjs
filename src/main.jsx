import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import MainLayout from "./MainLayout.jsx";
import AuthLayout from "./AuthLayout.jsx";

import Delivery from "./Components/Delivery/Delivery.jsx";
import Dinning from "./Components/Dinning/Dinning.jsx";
import Login from "./Components/LogIn/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Routes WITH Header & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Delivery />} />
          <Route path="/dinning" element={<Dinning />} />
        </Route>

        {/* Routes WITHOUT Header & Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
