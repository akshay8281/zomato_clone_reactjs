import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,Routes,HashRouter,
  RouterProvider ,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Delivery from "./Components/Delivery/Delivery.jsx";
import Dinning from "./Components/Dinning/Dinning.jsx";
import Login from "./Components/LogIn/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Delivery />} />
          <Route path="dinning" element={<Dinning />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
