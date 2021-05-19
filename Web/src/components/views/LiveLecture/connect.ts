import io from "socket.io-client";
import Peer from "peerjs";
type PeerList = {
  [userId: string]: Peer.MediaConnection;
};

let peerList: PeerList = {};
let peerIds: string[] = [];
// const socket = io("http://localhost:5001", { transports: ["polling"] });
let socket;
const roomId = "test_room";
const profId = "p";
const getSocket = () => {
  if (!socket) {
    // socket = io("https://115.91.214.5:5000", {
    //   transports: ["polling"],
    // });
    socket = io("https://capstone-ontact.herokuapp.com", {
      transports: ["polling"],
    });
    console.log("get socket", socket);
  }
};
export const educateeConnect = (
  localId: string,
  stream: MediaStream,
  remoteVideoRef: React.RefObject<HTMLVideoElement>
) => {
  getSocket();
  const peer = new Peer(localId);
  peer.on("open", (id) => {
    // id : localid
    console.log(`[PEER OPEN BY ${id}]`);
    socket.emit("join-room", roomId, id);
  });
  peer.on("call", (call) => {
    call.answer(stream);
    call.on("stream", (remoteStream) => {
      console.log("get stream !!!");
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
  });
  socket.on("user-connected", (userId: string) => {
    //steam 수신 peer 연결
    // userid : 상대방 아이디

    console.log("connected with :", userId);
    const call = peer.call(profId, stream);
    call.on("stream", (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
    call.on("close", () => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.remove();
      }
    });
    peerList[userId] = call;
    peerIds.push(userId);
    console.log(`total connected peer = ${peerIds}`);
  });
};
export const educatorConnect = (
  localId: string,
  localStream: MediaStream,
  localVideoRef: React.RefObject<HTMLVideoElement>
) => {
  getSocket();
  const peer = new Peer(localId);
  if (localVideoRef.current) {
    localVideoRef.current.srcObject = localStream;
  }
  peer.on("open", (id) => {
    // id : localid
    console.log(`open peer by ${id}`);
    socket.emit("join-room", roomId, id);
  });
  peer.on("call", (call) => {
    call.answer(localStream);
    call.on("stream", (remoteStream) => {});
  });

  socket.on("user-connected", (userId) => {
    //steam 수신 peer 연결
    // userid : 상대방 아이디
    console.log("connected with :", userId);
    const call = peer.call(userId, localStream);
    call.on("stream", (remoteStream) => {});
    call.on("close", () => {});
    peerList[userId] = call;
    peerIds.push(userId);
    console.log(`total connected peer = ${peerIds}`);
  });
};
