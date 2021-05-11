import React, { RefObject } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import LocalVideo from "../Video/LocalVideo";
import Peer from "peerjs";
//Todo
//peer js
//professor, student page
const LiveLecture = () => {
  const [localID, setLocalID] = React.useState("");
  const [remoteID, setRemoteID] = React.useState("");
  const [isConnect, setIsConnect] = React.useState(false);
  let peer: Peer | null = null;
  const changelocalID = (event) => {
    const result = event.target.value;
    setLocalID(result);
  };
  const changeremoteID = (event) => {
    const result = event.target.value;
    setRemoteID(result);
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
      <button
        onClick={() => {
          setIsConnect((o) => !o);
          peer = new Peer(localID);
          console.log(localID);
        }}
      >
        CONNECT
      </button>
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
          {isConnect ? (
            <LocalVideo remoteID={remoteID} localID={localID} peer={peer} />
          ) : null}
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
