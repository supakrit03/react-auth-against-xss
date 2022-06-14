import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { refreshToken } from "../services/refreshToken";
import { AppContext } from "../Router";

export default function LoginLayout({ children }) {
  const { setAccessToken } = React.useContext(AppContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    refreshToken().then((refreshToken) => {
      setAccessToken(refreshToken);

      navigate("/user", { replace: true });
    });
  }, []);

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      {children}
    </div>
  );
}
