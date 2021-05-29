import React, { Component, useEffect, useRef, useState } from "react";
import { useAuth } from "../../hoc/AuthContext";
import { auth, store } from "../../firebase";
import logo from "../Navbar/Sections/onTact.png";
import logo_desc from "./logo_desc.png";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../ProfessorPage/Sections/AdminLecture.css";
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const isProfessorRef = useRef();
  const { signup, currentUser } = useAuth();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    // try {
    //   setError("");
    //   setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
    //   if (currentUser.isProfessor === "on") {
    //     history.push("/professorpage");
    //   } else {
    //     history.push("/studentpage");
    //   }
    // } catch {
    //   setError("Failed to sign in");
    // }
    setError("");
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value);

    const ref = store.collection("User").doc(auth.currentUser.uid);
    ref.get().then((item) => {
      auth.currentUser.isProfessor = item.data().isProfessor;
      if (auth.currentUser.isProfessor === "on") {
        history.push("/professorpage");
      } else {
        history.push("/studentpage");
      }
    });
  }

  return (
    <>
      <img
        src={logo_desc}
        style={{
          position: "absolute",
          top: "30%",
          left: "30%",
          transform: "translate(-50%)",
          alignItems: "center",
        }}
      ></img>
      <Card
        style={{
          position: "absolute",
          top: "30%",
          left: "70%",
          transform: "translate(-50%)",
          width: "28rem",
          alignItems: "center",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb4" style={{ color: "#807E7E" }}>
            Log In
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <button
              className="w-100"
              style={{
                backgroundColor: "#D65E2A",
                color: "white",
                fontSize: 20,
              }}
              type="submit"
              disabled={loading}
            >
              Log In
            </button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/signup">Need an accout?</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default LoginPage;
