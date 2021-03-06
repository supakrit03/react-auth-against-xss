import React from "react";

import { Container } from "react-bootstrap";
import UserInfo from "../components/UserInfo";

export default function User() {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex flex-row justify-content-center align-items-center"
    >
      <UserInfo />
    </Container>
  );
}
