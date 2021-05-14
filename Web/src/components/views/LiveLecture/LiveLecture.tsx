import React, { RefObject } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import LocalVideo from "../Video/LocalVideo";
import Peer from "peerjs";
import axios from "axios";
//Todo
//peer js
//https://jinhyukoo.github.io/js/2020/12/13/peerJS%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0.html
//https://velog.io/@mgm-dev/PeerJS%EB%A1%9C-WebRTC-%EC%89%BD%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0#2-peerjs%EB%8A%94-%EB%98%90-%EB%AC%B4%EC%97%87
//https://dev.to/arjhun777/video-chatting-and-screen-sharing-with-react-node-webrtc-peerjs-18fg
//https://www.toptal.com/webrtc/taming-webrtc-with-peerjs
//professor, student page

const roomId = 1000;

const LiveLecture = () => {
  const [localID, setLocalID] = React.useState("");
  const [remoteID, setRemoteID] = React.useState("");
  const [isConnect, setIsConnect] = React.useState(false);
  const [peer, setPeer] = React.useState<Peer | null>(null);
  const changelocalID = event => {
    const result = event.target.value;
    setLocalID(result);
  };
  const changeremoteID = event => {
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
          setIsConnect(o => !o);
          setPeer(new Peer(localID));
          axios({
            method: "POST",
            url: "http://192.168.1.142:5000/join",
            data: {
              name: "dd",
            },
          }).then(res => console.log(res.data));
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
          {console.log(isConnect, peer)}
          {isConnect && peer ? (
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
