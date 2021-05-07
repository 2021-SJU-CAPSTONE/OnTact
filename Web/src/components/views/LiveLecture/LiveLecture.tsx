import React, { RefObject } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import LiveVideo from "../LiveVideo/LiveVideo";
import Peer from "peerjs";
//Todo
//peer js
//professor, student page
const LiveLecture = () => {
  const [localID, setLocalID] = React.useState("");
  const [remoteID, setRemoteID] = React.useState("");
  let peer;
  const changelocalID = event => {
    const result = event.target.value;
    setLocalID(result);
  };
  const changeremoteID = event => {
    const result = event.target.value;
    setRemoteID(result);
  };
  const onConnect = () => {
    peer = new Peer(localID);
    const connection = peer.connect;
    console.log(localID);
    console.log(remoteID);
  };
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <h3>
        localID
        <input onChange={changelocalID}></input>
      </h3>
      <h3>
        remoteID
        <input onChange={changeremoteID}></input>
      </h3>
      <button onClick={onConnect}>CONNECT</button>
      <div className="row d-flex ">
        <div
          style={{
            width: "60%",
            height: "60vh",
            border: "solid",
            // backgroundColor: "black",
            float: "left",
            marginLeft: "50px",
          }}
        >
          <LiveVideo />
          <LiveVideo />
        </div>
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
            border: "solid",
            // backgroundColor: "gray",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LiveLecture;
