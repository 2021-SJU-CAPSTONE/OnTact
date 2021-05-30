import React from "react";
import Chatting from "./Chat/Chatting";
import Video from "./Video/Video";
import { useHistory } from "react-router-dom";
import { UseAuth } from "../../hoc/AuthContext";
import { clearChat, getLectureInfo } from "../../utils/Lecture";
import * as type from "../../type";
const LiveLecture = ({ match }) => {
  //계정 확인
  const lectureId = match.params.lecture as string;
  const userInfo = UseAuth().userInfo;
  const history = useHistory();
  const [lectureInfo, setLectureInfo] = React.useState<type.LectureInfo>();
  React.useEffect(() => {
    if (lectureInfo === undefined) {
      getLectureInfo(lectureId).then(info => {
        setLectureInfo(info);
      });
    }
  }, [lectureInfo]);
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
      {userInfo && lectureInfo ? (
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
                <Video userInfo={userInfo} lectureInfo={lectureInfo} onExit={onExit} />
              ) : null}
            </div>
            <div>
              <Chatting lectureId={lectureInfo.Name} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LiveLecture;
