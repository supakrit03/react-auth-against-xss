import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { logout } from "../services/logout";
import { AuthContext } from "../contexts/auth";

export default function UserInfo() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    setAccessToken("");
    navigate("/login", { replace: true });
  };

  return (
    <Card>
      <Card.Header>User info</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>Welcome back , {accessToken}</p>
        </blockquote>

        <Button variant="danger" onClick={onLogout}>
          Logout
        </Button>
      </Card.Body>
    </Card>
  );
}
