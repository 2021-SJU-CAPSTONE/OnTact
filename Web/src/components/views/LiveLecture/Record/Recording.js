import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Recording = () => {
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });

  const recordButton = React.useRef(null);
  const pauseButton = React.useRef(null);
  const [visibleVideo, setVisibleVideo] = React.useState(false);
  const [visiblePause, setVisiblePause] = React.useState(false);

  const useRecord = () => {
    if (recordButton.current) {
      if (recordButton.current.innerHTML === "녹화 종료") {
        recordButton.current.innerHTML = "녹화 시작";
        setVisiblePause(false);
        stopRecording();
      } else {
        recordButton.current.innerHTML = "녹화 종료";
        setVisiblePause(true);
        startRecording();
      }
    }
  };

  const usePause = () => {
    if (pauseButton.current) {
      if (pauseButton.current.innerHTML === "녹화 중지") {
        pauseButton.current.innerHTML = "녹화 재개";
        pauseRecording();
      } else {
        pauseButton.current.innerHTML = "녹화 중지";
        resumeRecording();
      }
    }
  };

  const visible = () => {
    setVisibleVideo(true);
  };

  return (
    <div>
      <button ref={recordButton} onClick={useRecord}>
        녹화 시작
      </button>
      {visiblePause ? (
        <button ref={pauseButton} onClick={usePause}>
          녹화 중지
        </button>
      ) : null}
      <button onClick={visible}>영상</button>
      {visibleVideo ? (
        <video src={mediaBlobUrl} controls autoPlay loop />
      ) : null}
    </div>
  );
};

export default Recording;
