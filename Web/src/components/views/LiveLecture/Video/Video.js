import React from "react";
import { educatorConnect, educateeConnect } from "./connect";
import Subtitle from "../Subtitle/Subtitle";
const Video = ({ userInfo }) => {
  //video
  const videoRef = React.useRef();
  // share
  const [isShare, setIsShare] = React.useState(false);
  const changeIsShare = value => {
    if (value !== undefined) {
      setIsShare(value);
    }
    return isShare;
  };

  React.useEffect(() => {
    if (userInfo) {
      if (userInfo.isProfessor === "on") {
        if (isShare) {
          navigator.mediaDevices.getDisplayMedia({ audio: true, video: true }).then(stream => {
            educatorConnect(userInfo.id, stream, videoRef);
          });
        } else {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            educatorConnect(userInfo.id, stream, videoRef);
          });
        }
      } else {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
          educateeConnect(userInfo.id, stream, videoRef);
        });
      }
    }
  }, [isShare]);
  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted></video>
      <Subtitle changeIsShare={changeIsShare} userInfo={userInfo} />
    </div>
  );
};

export default React.memo(Video);
