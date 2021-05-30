import React from "react";
import { educatorConnect, educateeConnect } from "./connect";
import Subtitle from "../Subtitle/Subtitle";
import "./video.css";
import { store } from "../../../firebase";

const Video = ({ userInfo, lectureInfo, onExit }) => {
  //video
  const videoRef = React.useRef();
  const [peers, setPeers] = React.useState(["123"]);
  const addPeers = newPeer => {
    setPeers(o => {
      return [...o, newPeer];
    });
  };
  //record
  let recordChunk = [];
  let recorder = React.useRef();
  let recordCnt = 0;
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
    a.download = `${lectureInfo.Name}.mp4`;
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
    createPath();
    onExit();
  };
  const createPath = () => {
    const lecRef = store
      .collection(`Lecture/${lectureInfo.Name}/RecordedLecture`)
      .doc(`${lectureInfo.cnt + 1}회차`);
    lecRef.set({
      Video: `gs://capstone-925e4.appspot.com/RecordedLecture/${lectureInfo.Name}/${
        lectureInfo.cnt + 1
      }회차`,
    });
  };
  // share
  const [isShare, setIsShare] = React.useState(false);
  /*
   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
   위에 false 값을 true로 수정하면 강의 시작시 디폴트 송출 영상이 공유 화면
   false일 경우 상의 시작시 디폴트 송출 영상이 캡 화면
  */
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
            educatorConnect(userInfo.id, stream, videoRef, lectureInfo.Name, addPeers);

            recorder.current = new MediaRecorder(stream, {
              type: "video/mp4",
            });
            recorder.current.ondataavailable = handleDataAvailable;
            recorder.current.start();
          });
        } else {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            educatorConnect(userInfo.id, stream, videoRef, lectureInfo.Name, addPeers);
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
      {peers !== [] && userInfo.isProfessor === "on" ? (
        <div>
          현재 접속자 :{" "}
          {peers.map(peer => {
            return <span>[{peer}]</span>;
          })}
        </div>
      ) : null}
      <div>
        <video id="video" ref={videoRef} autoPlay playsInline muted></video>
        <Subtitle
          changeIsShare={changeIsShare}
          userInfo={userInfo}
          onExit={onExit2}
          lectureInfo={lectureInfo}
        />
      </div>
    </div>
  );
};

export default React.memo(Video);
