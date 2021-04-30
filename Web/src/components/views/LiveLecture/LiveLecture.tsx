import React, { useState, useEffect } from "react";
import Chatting from "./Chatting/Chatting";
function LiveLecture() {
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <div>
        <div
          style={{
            width: "60%",
            height: "500px",
            backgroundColor: "black",
            float: "left",
            marginLeft: "50px",
          }}
        >
          wowwowo
        </div>
        <div style={{ width: "30%", height: "500px", float: "left" }}>
          <Chatting />
        </div>
      </div>
    </div>
  );
}

export default LiveLecture;
