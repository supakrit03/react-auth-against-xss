import React from "react";

import { Container } from "react-bootstrap";
import UserInfo from "../components/UserInfo";
import LoginLayout from "../components/LoginLayout";

export default function User() {
  return (
    <LoginLayout>
      <Container
        style={{ minHeight: "100vh" }}
        className="d-flex flex-row justify-content-center align-items-center"
      >
        <UserInfo />
      </Container>
    </LoginLayout>
  );
}
