import React from "react";
import { educatorConnect, educateeConnect, disconnect } from "./connect";
import Subtitle from "../Subtitle/Subtitle";
import "./video.css";

const Video = ({ userInfo, lectureInfo, onExit }) => {
  //video
  const videoRef = React.useRef();
  //record
  let recordChunk = [];
  let recorder = React.useRef();
  const handleDataAvailable = event => {
    recordChunk.push(event.data);
    download();
  };
  const download = () => {
    var blob = new Blob(recordChunk, {
      type: "video/mp4",
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = `${new Date().getTime()}.mp4`;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  const recodeStop = () => {
    if (userInfo.isProfessor === "on") {
      recorder.current.stop();
    } else {
      //
    }
  };
  const onExit2 = () => {
    recodeStop();
    onExit();
  };
  // share
  const [isShare, setIsShare] = React.useState(false);
  const changeIsShare = value => {
    if (value !== undefined) {
      setIsShare(value);
      recodeStop();
    }
    return isShare;
  };
  React.useEffect(() => {
    if (userInfo) {
      if (userInfo.isProfessor === "on") {
        if (isShare) {
          navigator.mediaDevices.getDisplayMedia({ audio: true, video: true }).then(stream => {
            educatorConnect(userInfo.id, stream, videoRef, lectureInfo.Name);
            recorder.current = new MediaRecorder(stream, {
              type: "video/mp4",
            });
            recorder.current.ondataavailable = handleDataAvailable;
            recorder.current.start();
          });
        } else {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            educatorConnect(userInfo.id, stream, videoRef, lectureInfo.Name);
            recorder.current = new MediaRecorder(stream, {
              type: "video/mp4",
            });
            recorder.current.ondataavailable = handleDataAvailable;
            recorder.current.start();
          });
        }
      } else {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
          educateeConnect(userInfo.id, stream, videoRef, lectureInfo.Name, lectureInfo.profId);
        });
      }
    }
  }, [isShare]);

  return (
    <div>
      <video id="video" ref={videoRef} autoPlay playsInline muted></video>
      <button onClick={disconnect}>disconnect</button>
      <Subtitle changeIsShare={changeIsShare} userInfo={userInfo} onExit={onExit2} />
    </div>
  );
};

export default React.memo(Video);
