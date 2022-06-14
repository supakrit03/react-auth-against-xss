import React from "react";
import { Container } from "react-bootstrap";

import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex flex-row justify-content-center align-items-center"
    >
      <LoginForm />
    </Container>
  );
}

export default App;
