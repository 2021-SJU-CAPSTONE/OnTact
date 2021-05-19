import React from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import { educatorConnect, educateeConnect } from "./connect";
//Todo
// isProf 대신 Auth 에서 직접 계정 정보를 가져온다. currentUser
//https://jinhyukoo.github.io/js/2020/12/13/peerJS%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0.html
//https://velog.io/@mgm-dev/PeerJS%EB%A1%9C-WebRTC-%EC%89%BD%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0#2-peerjs%EB%8A%94-%EB%98%90-%EB%AC%B4%EC%97%87
//https://dev.to/arjhun777/video-chatting-and-screen-sharing-with-react-node-webrtc-peerjs-18fg
//https://www.toptal.com/webrtc/taming-webrtc-with-peerjs

const LiveLecture = () => {
  const [localId, setlocalId] = React.useState("");
  const [isConnect, setIsConnect] = React.useState(false);
  const [v, reload] = React.useState(false);
  const localIdRef = React.createRef<HTMLInputElement>();
  const videoRef = React.createRef<HTMLVideoElement>();
  const isProf = localId === "p" ? true : false;

  React.useEffect(() => {
    if (isConnect) {
      if (isProf) {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            educatorConnect(localId, stream, videoRef);
          });
      } else {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            educateeConnect(localId, stream, videoRef);
          });
      }
    }
  });
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <h3>
        localId
        <input ref={localIdRef}></input>
      </h3>
      <button
        onClick={() => {
          setIsConnect(true);
          reload((o) => !o);
          if (localIdRef.current) {
            setlocalId(localIdRef.current.value);
          }
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
            <video ref={videoRef} autoPlay playsInline></video>
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
