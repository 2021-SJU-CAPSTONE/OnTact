import React from "react";
import educatorConnect from "../LiveLecture/connect";
// type Prop = {
//   remoteID: string;
//   localID: string;
//   peer: Peer;
//   socket: typeof io;
// };
type Prop = {
  remoteId: string;
  localId: string;
};
const LocalVideo = (prop: Prop) => {
  let localVideo = React.createRef<HTMLVideoElement>();
  let remoteVideo = React.createRef<HTMLVideoElement>();
  const isProf = prop.localId === "p" ? true : false;
  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
      educatorConnect(prop.localId, stream, localVideo, remoteVideo);
    });
  });

  return (
    <div className="video">
      <video ref={localVideo} autoPlay muted playsInline></video>
      <video ref={remoteVideo} autoPlay muted playsInline></video>
    </div>
  );
};
export default LocalVideo;
