import React from "react";
import Cardlist from "./Card/Cardlist";
import { Link } from "react-router-dom";
export default function RecordLectureList() {
  return (
    <div
      className="card overflow-auto"
      style={{ width: "80%", marginLeft: "50px" }}
    >
      <div className="col-md-6">
        <span
          className="badge "
          style={{
            width: "100px",
            display: "block",
            marginBottom: "20px",
            fontSize: "1rem",
            backgroundColor: "#D65E2A",
            color: "white",
          }}
        >
          강의명
        </span>
        <span
          className="badge "
          style={{
            width: "300px",
            display: "block",
            fontSize: "1rem",
            backgroundColor: "#D65E2A",
            color: "white",
          }}
        >
          Capstone Design(001)
        </span>
      </div>
      <Link to="/recordvideo">
        <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
          <Cardlist />
        </div>
      </Link>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Cardlist />
      </div>
    </div>
  );
}
