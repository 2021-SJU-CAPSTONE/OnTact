import React, { Component, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./Sections/AdminLecture.css";
import StudentList from "./Sections/StudentList";
import { Link } from "react-router-dom";
import AttendBoard from "./Sections/AttendBoard";
import * as type from "../../type";
import { getLectureInfo } from "../../utils/Lecture";

//import Lecturelist from './Sections/Lecturelist';
const AdimnLecture = ({ match }) => {
  const [Open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen((o) => !o);
  };

  const [lecInfo, setLecInfo] = React.useState<type.LectureInfo>();
  getLectureInfo(match.params.lecture).then((info) => {
    setLecInfo(info);
  });

  return (
    <div className="row" style={{ width: "75%", margin: "6rem auto" }}>
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
          {match.params.lecture}
        </span>
        <div>
          <StudentList
            changeOpen={changeOpen}
            lectureId={match.params.lecture}
          />
        </div>
      </div>
      <div className="col-md-6 ">
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
          강의시간
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
          금요일 13:30 ~ 19:00
        </span>
        {Open ? (
          <div>
            <AttendBoard />
          </div>
        ) : null}

        <Link to="/professorpage">
          <span
            className="badge  mt-4"
            style={{
              width: "100px",
              display: "block",
              marginBottom: "20px",
              fontSize: "1rem",
              backgroundColor: "#D65E2A",
              color: "white",
              top: "70vh",
              position: "absolute",
            }}
          >
            저장하기
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AdimnLecture;
