import React, { Component } from "react";
import StudentList from "./addLectureboard/StudentList";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Addlecture = () => {
  const classes = useStyles();

  return (
    <div style={{ width: "80%", paddingLeft: "100px" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="col-md-6">
          <span
            className="badge "
            style={{
              width: "150px",
              display: "block",
              fontSize: "1rem",
              backgroundColor: "#D65E2A",
              color: "white",
            }}
          >
            강의명 입력
          </span>
        </div>
        <div className="col-md-6">
          <TextField id="강의명 입력" label="강의명 입력" />
        </div>
        <div className="col-md-6">
          <span
            className="badge "
            style={{
              width: "150px",
              display: "block",
              fontSize: "1rem",
              backgroundColor: "#D65E2A",
              color: "white",
              marginTop: "20px",
            }}
          >
            강의시간 입력
          </span>
        </div>
        <div
          style={{ paddingLeft: "15px" }}
          className="  align-items-center col-md-24"
        >
          <div className="flex-row">
            <div
              className="d-flex flex-column"
              style={{ paddingRight: "30px" }}
            >
              <select
                className="custom-select mb-2 mr-sm-2 mb-sm-0"
                id="inlineFormCustomSelect"
                style={{ marginTop: "15px", width: "100px" }}
              >
                <option selected>요일</option>
                <option value="1">월요일</option>
                <option value="2">화요일</option>
                <option value="3">수요일</option>
                <option value="4">목요일</option>
                <option value="5">금요일</option>
              </select>
            </div>
            <div className=" flex-column" style={{ width: "200px" }}>
              <TextField id="강의시간 " label="강의시간 " />
            </div>
          </div>
        </div>
      </form>
      <StudentList />
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
          }}
        >
          저장하기
        </span>
      </Link>
    </div>
  );
};

export default Addlecture;
