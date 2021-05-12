import React from "react";
import Peer from "peerjs";

type Prop = {
  remoteID: string;
  localID: string;
  peer: Peer | null;
};
const RemoteVideo = (prop: Prop) => {
  let video = React.createRef<HTMLVideoElement>();

  React.useEffect(() => {
    const peer = prop.peer;
    if (peer !== null) {
      peer.on("call", (call) => {
        call.on("stream", (stream) => {
          if (video.current) {
            video.current.srcObject = stream;
          }
        });
      });
    }
  });

  return (
    <div className="video">
      <video ref={video} autoPlay muted playsInline></video>
    </div>
  );
};
export default RemoteVideo;
