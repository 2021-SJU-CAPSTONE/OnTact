import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import firebase from "firebase/app";

const Recording = ({ userInfo }) => {
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

  const uploadVideo = () => {
    // // File or Blob named mountains.jpg
    // const file = mediaBlobUrl;
    // // Create the file metadata
    // var metadata = {
    //   contentType: "video/webm",
    // };
    // // Upload file and metadata to the object 'images/mountains.jpg'
    // var storageRef = firebase.storage().ref();
    // var uploadTask = storageRef.child("video/" + file.name).put(file, metadata);
    // // Listen for state changes, errors, and completion of the upload.
    // uploadTask.on(
    //   firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //   function (snapshot) {
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log("Upload is " + progress + "% done");
    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log("Upload is paused");
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log("Upload is running");
    //         break;
    //     }
    //   },
    //   function (error) {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case "storage/unauthorized":
    //         // User doesn't have permission to access the object
    //         break;
    //       case "storage/canceled":
    //         // User canceled the upload
    //         break;
    //       case "storage/unknown":
    //         // Unknown error occurred, inspect error.serverResponse
    //         break;
    //     }
    //   },
    //   function () {
    //     // Upload completed successfully, now we can get the download URL
    //     uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    //       console.log("File available at", downloadURL);
    //     });
    //   }
    // );
  };

  const [isProf, setIsProf] = React.useState(false);
  React.useEffect(() => {
    if (userInfo) {
      if (userInfo.isProfessor === "on") {
        setIsProf(true);
      } else {
        setIsProf(false);
      }
    }
  }, [isProf]);
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
    setVisibleVideo((o) => !o);
  };

  return (
    <>
      {isProf ? (
        <>
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
        </>
      ) : null}
    </>
  );
};

export default React.memo(Recording);
