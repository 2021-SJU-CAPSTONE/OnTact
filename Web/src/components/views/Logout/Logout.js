import React, { useState } from "react";
import { useAuth } from "../../hoc/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Logout() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Button
        onClick={handleLogout}
        varient="link"
        style={{ marginRight: "50px" }}
      >
        logout
      </Button>
    </>
  );
}
