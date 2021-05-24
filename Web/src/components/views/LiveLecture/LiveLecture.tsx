import React from "react";
import Chatting from "./Chat/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import { educatorConnect, educateeConnect } from "./connect";
import { getUserInfo, getCurrentUserUid } from "../../hoc/authService";
import Subtitle from "./subtitles/Subtitle";

type UserInfo = {
  Dept: string;
  Name: string;
  email: string;
  isProfessor: string;
  password: string;
};
const lectureId = "Sample"; // sample lecture db

const LiveLecture = () => {
  const [isConnect, setIsConnect] = React.useState(false);
  const [v, reload] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const currentUid = getCurrentUserUid();
  const [userInfo, setUserInfo] = React.useState<UserInfo>();
  React.useEffect(() => {
    if (currentUid === "not login") {
      console.log(currentUid);
    }
    getUserInfo(currentUid).then(currentUserInfo => {
      console.log(currentUserInfo);
      if (currentUserInfo !== undefined) {
        setUserInfo({
          Dept: currentUserInfo.Dept,
          Name: currentUserInfo.Name,
          email: currentUserInfo.email,
          isProfessor: currentUserInfo.isProfessor,
          password: currentUserInfo.password,
        });
        if (isConnect) {
          if (currentUserInfo.isProfessor === "on") {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
              if (userInfo !== undefined) {
                educatorConnect(userInfo.Name, stream, videoRef);
              }
            });
          } else {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
              if (userInfo !== undefined) {
                educateeConnect(userInfo.Name, stream, videoRef);
              }
            });
          }
        }
      }
    });
  }, [v]);
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <button
        onClick={() => {
          setIsConnect(true);
          reload(o => !o);
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
          <video ref={videoRef} autoPlay playsInline muted></video>
        </div>
        <div>
          <Chatting name={userInfo?.Name} lectureId={lectureId} />
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
        >
          <div>
            <Subtitle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLecture;
