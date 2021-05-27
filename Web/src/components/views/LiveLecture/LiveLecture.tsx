import React from "react";
import Chatting from "./Chat/Chatting";
import { getUserInfo, getCurrentUserUid } from "../../hoc/authService";
import * as type from "../../type";
import Video from "./Video/Video";
const lectureId = "Sample"; // sample lecture db
// todo 화면 공유, 화면 녹화 기능 추가
// 화면 공유 기능 링크
//https://cryingnavi.github.io/webrtc/2020/10/15/webrtc-sharedscreen.html
//https://github.com/microsoft/TypeScript/issues/33232
const LiveLecture = () => {
  //계정 확인
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [v, setv] = React.useState(false);
  const [uid, setUid] = React.useState<string>(getCurrentUserUid());
  const [userInfo, setUserInfo] = React.useState<type.UserInfo>();
  const [tsList, setTsList] = React.useState();
  React.useEffect(() => {
    setUid(getCurrentUserUid());
    if (uid === "not login") {
      setIsLogIn(false);
      setv(!v);
    } else {
      setIsLogIn(true);
      if (!userInfo) {
        getUserInfo(uid).then((info) => {
          setUserInfo(info);
        });
      }
    }
  }, [isLogIn, v, userInfo]);
  const onBtnExit = () => {
    //saveTSList in Firebase
  };
  return (
    <div>
      <button className="btnExit btn-dark" onClick={onBtnExit}>
        강의 나가기
      </button>
      {isLogIn ? (
        <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
          <div className="row d-flex ">
            <div
              style={{
                width: "60%",
                height: "60vh",
                border: "solid",
                backgroundColor: "black",
                float: "left",
                marginLeft: "50px",
              }}
            >
              {userInfo ? (
                <Video userInfo={userInfo} lecture={lectureId} />
              ) : null}
            </div>
            <div>
              <Chatting name={userInfo?.Name} lectureId={lectureId} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LiveLecture;
