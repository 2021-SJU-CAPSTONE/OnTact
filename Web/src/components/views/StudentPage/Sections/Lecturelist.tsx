import React from "react";
import "./Lecturelist.css";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import AutoAttendance from "../AutoAttendance";
import { UseAuth } from "../../../hoc/AuthContext";
function Lecturelist() {
  const userInfo = UseAuth().userInfo;

  const checkAttendance = lecture => {
    if (userInfo) {
      const studentId = userInfo.id;
      AutoAttendance(lecture, studentId);
    }
  };

  const ShowList = () => {
    const lecList = userInfo?.lectureList.map(lecture => (
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center">
            {" "}
            <Link to={`/livelecture/${lecture}`}>
              <span
                className="star"
                onClick={() => {
                  checkAttendance(lecture);
                }}
              >
                <MDBIcon icon="play" />
                {/* <MDBIcon icon="stop" /> */}
              </span>
            </Link>
            <div className="d-flex flex-column">
              {" "}
              <span>{lecture}</span>
              <div className="d-flex flex-row align-items-center time-text">
                {" "}
                <span className="dots"></span> <small>여러 교수자</small>{" "}
              </div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <Link to="/studentpage/checkattendence">
              <button
                className="btn btn-success mr-2 font-weight-bold"
                style={{ fontSize: "1rem" }}
              >
                출석확인
              </button>
            </Link>
            <Link to="/studentpage/recordlecturelist">
              <button
                className="btn btn-warning mr-2 font-weight-bold"
                style={{ fontSize: "1rem" }}
              >
                {" "}
                녹화강의
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));

    return <div>{lecList}</div>;
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-md-8">
          <div className="card">
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <h4 className="font-weight-bold"> 강의목록</h4>
              <h6 className="font-weight-bold">2021학년도 1학기</h6>
            </div>
            {userInfo ? <ShowList /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecturelist;
