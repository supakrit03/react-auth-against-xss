import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      {children}
    </>
  );
}
