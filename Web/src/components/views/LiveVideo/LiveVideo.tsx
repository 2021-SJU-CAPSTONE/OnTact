import React from "react";

const LiveVideo = () => {
  let localVideo = React.createRef<HTMLVideoElement>();
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideo.current) {
          localVideo.current.srcObject = stream;
        }
      });
  }, [localVideo]);
  return (
    <div className="video">
      <video ref={localVideo} autoPlay playsInline></video>
    </div>
  );
};
export default LiveVideo;
