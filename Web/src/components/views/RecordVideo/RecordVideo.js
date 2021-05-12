import React from "react";
import ReactPlayer from "react-player";

export default function RecordVideo() {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
      <div></div>
    </div>
  );
}
