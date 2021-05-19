import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../hoc/AuthContext";
import Lecturelist from "./Sections/Lecturelist";
import { Link } from "react-router-dom";
//import Lecturelist from './Sections/Lecturelist';
function StudentPage() {
  const { currentUser } = useAuth();
  return (
    <div style={{ width: "75%", margin: "6rem auto" }}>
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>
          {" "}
          <UserOutlined
            style={{ verticalAlign: "bottom", marginRight: "10px" }}
          />{" "}
          {currentUser && currentUser.Name} 님{" "}
        </h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <Lecturelist />
      </div>
      <div>
        <Link to="/livelecture">
          <button>backdoor</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentPage;
