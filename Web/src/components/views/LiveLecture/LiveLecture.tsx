import React from "react";
import Chatting from "./Chat/Chatting";
import { getUserInfo, getCurrentUserUid } from "../../utils/Auth";
import * as type from "../../type";
import Video from "./Video/Video";
import { useHistory } from "react-router-dom";
import { UseAuth } from "../../hoc/AuthContext";
const lectureId = "Capstone"; // sample lecture db
// todo 화면 공유, 화면 녹화 기능 추가
// 화면 공유 기능 링크
//https://cryingnavi.github.io/webrtc/2020/10/15/webrtc-sharedscreen.html
//https://github.com/microsoft/TypeScript/issues/33232
const LiveLecture = () => {
  //계정 확인
  const userInfo = UseAuth().userInfo;
  const history = useHistory();

  const onExit = () => {
    if (userInfo?.isProfessor === "on") {
      history.push("/professorpage");
    } else {
      history.push("/studentpage");
    }
    //saveTSList in Firebase
  };
  return (
    <div>
      {userInfo ? (
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
              {userInfo ? <Video userInfo={userInfo} lecture={lectureId} onExit={onExit} /> : null}
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
