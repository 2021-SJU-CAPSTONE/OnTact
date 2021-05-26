import React from "react";
import Chatting from "./Chat/Chatting";
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
  const [localId, setLocalId] = React.useState("");
  const localIdRef = React.useRef<HTMLInputElement>(null);
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [isShare, setIsShare] = React.useState(false);
  // todo 화면 공유, 화면 녹화 기능 추가
  // 화면 공유 기능 링크
  //https://cryingnavi.github.io/webrtc/2020/10/15/webrtc-sharedscreen.html
  //https://github.com/microsoft/TypeScript/issues/33232
  React.useEffect(() => {
    if (currentUid === "not login") {
      setIsLogIn(false);
    } else {
      setIsLogIn(true);
      getUserInfo(currentUid).then(currentUserInfo => {
        if (currentUserInfo !== undefined) {
          setUserInfo({
            Dept: currentUserInfo.Dept,
            Name: currentUserInfo.Name,
            email: currentUserInfo.email,
            isProfessor: currentUserInfo.isProfessor,
            password: currentUserInfo.password,
          });
          if (isConnect) {
            if (currentUserInfo.isProfessor === "on" || localId === "prof") {
              navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
                // if (isShare) {
                //   navigator.mediaDevices.getDisplayMedia({ audio: true, video: true }).then();
                // }
                if (localId === "prof") {
                  educatorConnect(localId, stream, videoRef);
                } else {
                  if (userInfo !== undefined) {
                    educatorConnect(userInfo.Name, stream, videoRef);
                  }
                }
              });
            } else {
              navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
                if (localId === "") {
                  if (userInfo !== undefined) {
                    educateeConnect(userInfo.Name, stream, videoRef);
                  }
                } else {
                  educateeConnect(localId, stream, videoRef);
                }
              });
            }
          }
        }
      });
    }
  }, [v, isLogIn, userInfo]);
  return (
    <div>
      {isLogIn ? (
        <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
          <input ref={localIdRef}></input>
          <button
            onClick={() => {
              setIsConnect(true);
              reload(o => !o);
              if (localIdRef.current) {
                setLocalId(localIdRef.current.value);
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
      ) : null}
    </div>
  );
};

export default LiveLecture;
