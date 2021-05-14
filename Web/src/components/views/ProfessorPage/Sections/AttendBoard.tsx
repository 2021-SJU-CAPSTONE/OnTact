import React, { useState } from "react";
import "./Lecturelist.css";
import useToggle from "../../../utils/Toggle";
import Editattand from "./Editattand";
function AttendBoard() {
  const [isOn, toggleIsOn] = useToggle();

  return (
    <div className="container overflow-auto" style={{ height: "500px" }}>
      <div className="row d-flex mt-4 ">
        <div className="col" style={{ marginLeft: "-15px" }}>
          <div className="card">
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <h4 className="font-weight-bold"> 출석확인</h4>
            </div>
            <div>
              <span
                className="badge badge-light"
                style={{
                  width: "130px",
                  height: "30px",
                  display: "block",
                  fontSize: "1rem",
                  justifyContent: "center",
                  paddingTop: "8px",
                }}
              >
                16012416 장재호
              </span>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <span style={{ fontWeight: "bold" }}>1회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>2회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>3회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>4회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>5회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>6회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>7회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>8회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>9회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <span style={{ fontWeight: "bold" }}>10회차</span>
                  <Editattand />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendBoard;
