import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import User from "./pages/User";

export const AppContext = React.createContext();

export default function Router() {
  const [accessToken, setAccessToken] = React.useState("");

  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/user"
            element={accessToken ? <User /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
