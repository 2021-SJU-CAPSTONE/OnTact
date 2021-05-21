import React from "react";
import Chatting from "./Chat/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import { educatorConnect, educateeConnect } from "./connect";
import { getUserInfo, getCurrentUserUid } from "../../hoc/authService";

const lectureId = "Sample"; // sample lecture db

const LiveLecture = () => {
  const [localId, setlocalId] = React.useState("");
  const [isConnect, setIsConnect] = React.useState(false);
  const [v, reload] = React.useState(false);
  const localIdRef = React.createRef<HTMLInputElement>();
  const videoRef = React.createRef<HTMLVideoElement>();
  const currentUid = getCurrentUserUid();
  React.useEffect(() => {
    getUserInfo(currentUid).then(currentUserInfo => {
      if (currentUserInfo !== undefined) {
        console.log("[currentUserInfo.isProfessor] : ", currentUserInfo.isProfessor);
        if (isConnect) {
          if (currentUserInfo.isProfessor === "on") {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
              educatorConnect(localId, stream, videoRef);
            });
          } else {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
              educateeConnect(localId, stream, videoRef);
            });
          }
        }
      }
    });
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
          reload(o => !o);
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
          {isConnect ? <video ref={videoRef} autoPlay playsInline></video> : null}
        </div>
        <div>
          <Chatting localId={localId} lectureId={lectureId} />
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
