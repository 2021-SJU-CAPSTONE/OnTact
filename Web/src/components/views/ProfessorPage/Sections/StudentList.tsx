import React, { useState } from "react";
import "./Lecturelist.css";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { MDBIcon } from "mdbreact";

type Prop = {
  changeOpen: () => void;
};
function StudentList(prop: Prop) {
  return (
    <div className="container overflow-auto" style={{ height: "500px" }}>
      <div className="row d-flex mt-4 ">
        <div className="col" style={{ marginLeft: "-15px" }}>
          <div className="card">
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <h4 className="font-weight-bold"> 수강학생목록 (32명)</h4>
            </div>

            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>16012416 장재호 </span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                    onClick={prop.changeOpen}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>17011613 장세정</span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>17011821 이주혁</span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>18012412 김형찬</span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>18012422 서경원</span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="star">
                    <MDBIcon icon="user-circle" />
                  </span>
                  <div className="d-flex flex-column">
                    {" "}
                    <span>18012422 서경원</span>
                  </div>
                </div>{" "}
                <div className="d-flex flex-row">
                  {" "}
                  <button
                    className="btn btn-success mr-2 font-weight-bold"
                    style={{ fontSize: "1rem" }}
                  >
                    출석확인
                  </button>{" "}
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>18012422 서경원</span>
                    </div>
                  </div>{" "}
                  <div className="d-flex flex-row">
                    {" "}
                    <button
                      className="btn btn-success mr-2 font-weight-bold"
                      style={{ fontSize: "1rem" }}
                    >
                      출석확인
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
