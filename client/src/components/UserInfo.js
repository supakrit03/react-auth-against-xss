import React from "react";
import { Card, Button } from "react-bootstrap";

export default function UserInfo() {
  return (
    <Card>
      <Card.Header>User info</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>Welcome back , </p>
        </blockquote>

        <Button variant="danger">Logout</Button>
      </Card.Body>
    </Card>
  );
}
