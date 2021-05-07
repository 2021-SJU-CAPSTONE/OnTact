import React from "react";
import useToggle from "../../../utils/Toggle";

export default function Editattand() {
  const [isOn, toggleIsOn] = useToggle();
  const [lateOn, lateToggleOn] = useToggle();
  const [abOn, abToggleOn] = useToggle();
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "100px" }}
      >
        <span
          className={isOn ? "badge badge-success" : ""}
          onClick={() => {
            toggleIsOn(true);
            lateToggleOn(false);
            abToggleOn(false);
          }}
          style={{ fontSize: "1rem" }}
        >
          출석
        </span>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "100px" }}
      >
        <span
          className={lateOn ? "badge badge-warning" : ""}
          onClick={() => {
            toggleIsOn(false);
            lateToggleOn(true);
            abToggleOn(false);
          }}
          style={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          지각
        </span>{" "}
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "100px" }}
      >
        <span
          className={abOn ? "badge badge-danger" : ""}
          onClick={() => {
            toggleIsOn(false);
            lateToggleOn(false);
            abToggleOn(true);
          }}
          style={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          결석
        </span>{" "}
      </div>
    </>
  );
}
