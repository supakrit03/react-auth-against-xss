import React, { useContext } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

import { login } from "../services/login";

export default function LoginForm() {
  const navigate = useNavigate();

  const { setAccessToken } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await login({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      setAccessToken(resp.data.access_token);
      navigate("/user", { replace: true });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Card className="p-4">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
