import React, { useState, useEffect } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
function LiveLecture() {
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <div className="row d-flex ">
        <div
          style={{
            width: "60%",
            height: "60vh",
            backgroundColor: "black",
            float: "left",
            marginLeft: "50px",
          }}
        ></div>
        <div>
          <Chatting />
        </div>
      </div>
      <div className="row d-flex">
        <div
          style={{
            marginLeft: "50px",
            width: "60%",
            height: "13vh",
            backgroundColor: "gray",
          }}
        ></div>
        <div>
          <ChatWrite />
        </div>
      </div>
    </div>
  );
}

export default LiveLecture;
