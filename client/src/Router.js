import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import User from "./pages/User";
import PersistLogin from "./components/PersistLogin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
