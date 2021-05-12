import React from "react";
import Peer from "peerjs";

type Prop = {
  remoteID: string;
  localID: string;
  peer: Peer | null;
};
const LocalVideo = (prop: Prop) => {
  let localVideo = React.createRef<HTMLVideoElement>();

  React.useEffect(() => {
    const peer = prop.peer;
    if (peer) {
      console.log(prop.localID);
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (localVideo.current) {
            localVideo.current.srcObject = stream;
          }
          const call = peer.call(prop.remoteID, stream);
          peer.on("call", (call) => {
            call.answer(stream);
          });
        });
    }
  });

  return (
    <div className="video">
      <video ref={localVideo} autoPlay muted playsInline></video>
    </div>
  );
};
export default LocalVideo;
