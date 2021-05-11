import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../hoc/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const isprofessor = useRef();
  const name = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        isprofessor.current.value,
        name.current.value
      );

      if (currentUser.isProfessor === "on") {
        history.push("/professorpage");
      } else {
        history.push("/studentpage");
      }
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <div>
      <div classNmae="w-100" style={{ alignContent: "center" }}>
        <Card style={{ justifyContent: "center", alignItems: "center" }}>
          <Card.Body>
            <h2 className="text-center mb4">Sign Up</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form
              style={{ alignItems: "center", maxWidth: "400px" }}
              onSubmit={handleSubmit}
            >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={name} required />
              </Form.Group>
              <Form.Group id="isprofessor">
                <Form.Label>교수님?</Form.Label>
                <Form.Control
                  type="hidden"
                  ref={isprofessor}
                  name="checkbox1"
                  value="off"
                />
                <Form.Control
                  type="checkbox"
                  ref={isprofessor}
                  name="on"
                  value="on"
                />
              </Form.Group>
              <Button className="w-100" type="submit" disabled={loading}>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
  );
}
