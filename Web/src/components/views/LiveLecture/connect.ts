import io from "socket.io-client";
import Peer from "peerjs";

let peers = {};
let a = 0;
// const socket = io("http://localhost:5001", { transports: ["polling"] });
let socket;
const roomId = "test_room";
const getSocket = () => {
  if (socket) {
    console.log("already exist socket");
  } else {
    socket = io("http://localhost:5001", { transports: ["polling"] });
    console.log("get socket", socket);
  }
};
export const educateeConnect = (
  localId: string,
  stream: MediaStream,
  remoteVideoRef: React.RefObject<HTMLVideoElement>
) => {
  getSocket();
  a = a + 1;
  console.log(a);
  const peer = new Peer(localId);
  // if (localVideoRef.current) {
  //   localVideoRef.current.srcObject = localStream;
  // }
  peer.on("open", id => {
    // id : localid
    console.log(`open peer by ${id}`);
    socket.emit("join-room", roomId, id);
  });
  peer.on("call", call => {
    // call.answer(localStream);
    call.on("stream", remoteStream => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
  });
  socket.on("get-stream", (stream: MediaStream) => {
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = stream;
    }
  });
  socket.on("user-connected", userId => {
    //steam 수신 peer 연결
    // userid : 상대방 아이디

    console.log("connected with :", userId);
    const call = peer.call(userId, stream);
    call.on("stream", remoteStream => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
    call.on("close", () => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.remove();
      }
    });

    peers[userId] = call;
  });
};
export const educatorConnect = (
  localId: string,
  localStream: MediaStream,
  localVideoRef: React.RefObject<HTMLVideoElement>
) => {
  getSocket();
  a = a + 1;
  console.log(a);
  const peer = new Peer(localId);
  if (localVideoRef.current) {
    localVideoRef.current.srcObject = localStream;
  }
  peer.on("open", id => {
    // id : localid
    console.log(`open peer by ${id}`);
    socket.emit("join-room", roomId, id);
    socket.emit("send-stream", roomId, localStream);
  });
  peer.on("call", call => {
    call.answer(localStream);
    call.on("stream", remoteStream => {
      //   if (remoteVideoRef.current) {
      //     remoteVideoRef.current.srcObject = remoteStream;
      //   }
    });
  });

  socket.on("user-connected", userId => {
    //steam 수신 peer 연결
    // userid : 상대방 아이디
    console.log("connected with :", userId);
    const call = peer.call(userId, localStream);
    call.on("stream", remoteStream => {
      // if (remoteVideoRef.current) {
      //   remoteVideoRef.current.srcObject = remoteStream;
      // }
    });
    call.on("close", () => {
      // if (remoteVideoRef.current) {
      //   remoteVideoRef.current.remove();
      // }
    });
    console.log(peers);
    peers[userId] = call;
  });
};
