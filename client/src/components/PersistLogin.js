import React, { useEffect, useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { refreshToken } from "../services/refreshToken";

import { AuthContext } from "../contexts/auth";

export default function PersistLogin() {
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshTK = async () => {
      try {
        const token = await refreshToken();
        setAccessToken(token);
      } catch (error) {
        navigate("/login");
      }
    };

    refreshTK();
  }, []);

  return <Outlet />;
}
