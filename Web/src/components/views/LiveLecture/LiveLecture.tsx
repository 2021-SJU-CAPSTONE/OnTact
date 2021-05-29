import React from "react";
import Chatting from "./Chat/Chatting";
import Video from "./Video/Video";
import { useHistory } from "react-router-dom";
import { UseAuth } from "../../hoc/AuthContext";
import { clearChat } from "../../utils/Lecture";
const LiveLecture = ({ match }) => {
  //계정 확인
  const lectureId = match.params.lecture;
  const userInfo = UseAuth().userInfo;
  const history = useHistory();

  const onExit = () => {
    if (userInfo?.isProfessor === "on") {
      history.push("/professorpage");
      clearChat(lectureId);
    } else {
      history.push("/studentpage");
    }
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
              <Chatting lectureId={lectureId} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LiveLecture;
