import React from "react";

const LiveVideo = ({ stream }) => {
  const viewRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!viewRef.current) {
      return;
    }
    viewRef.current.srcObject = stream ? stream : null;
  }, [stream]);
  return (
    <div className="video">
      <video ref={viewRef} autoPlay playsInline></video>
    </div>
  );
};
export default LiveVideo;
