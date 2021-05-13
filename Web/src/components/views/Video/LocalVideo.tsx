import React from "react";
import Peer from "peerjs";
import io from "socket.io-client";
type Prop = {
  remoteID: string;
  localID: string;
  peer: Peer;
  socket: typeof io;
};

//*
//
//*
const peers = {};
const LocalVideo = (prop: Prop) => {
  let localVideo = React.createRef<HTMLVideoElement>();
  let remoteVideo = React.createRef<HTMLVideoElement>();
  const [v, setV] = React.useState(false);
  const peer = new Peer(prop.localID);
  const socket = io("http://localhost:5000");
  peer.on("open", (id) => {
    console.log("connect on!", prop.localID);
    console.log("connect on!", id);
    console.log("D");
    socket.emit("join-room", 1000, id);
  });
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      if (localVideo.current) {
        localVideo.current.srcObject = stream;
      }
      peer.on("call", (call) => {
        console.log("[call]");
        call.answer(stream);
        call.on("stream", (remoteStream) => {
          if (remoteVideo.current) {
            remoteVideo.current.srcObject = remoteStream;
          }
        });
      });
      socket.on("user-connected", (userId) => {
        console.log(userId);
        const call = peer.call(userId, stream);
        call.on("stream", (remoteStream) => {
          if (remoteVideo.current) {
            remoteVideo.current.srcObject = remoteStream;
          }
        });
        call.on("close", () => {
          if (remoteVideo.current) {
            remoteVideo.current.remove();
          }
        });

        peer[userId] = call;
      });
    });
  React.useEffect(() => {});

  return (
    <div className="video">
      <video ref={localVideo} autoPlay muted playsInline></video>
      <video ref={remoteVideo} autoPlay muted playsInline>
        asdf
      </video>
    </div>
  );
};
export default LocalVideo;
