import React, { RefObject } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import LiveVideo from "../LiveVideo/LiveVideo";
import Peer from "peerjs";
const LiveLecture = () => {
  const [clientId, setClientId] = React.useState("");
  const [friendId, setFriendId] = React.useState("");
  const [camOn, setCamOn] = React.useState(false);

  // React.useEffect(() => {
  //   socket.on("init", (data: any) => setClientId(data.id)).emit("init");
  // }, []);
  // // function을 인자로 넘김으로 useState 변수를 넘길 수 있다.
  // const startCall = (isCaller: boolean, friendId: string, confing: any) => {
  // socket.on("init", (data: any) => {
  //   console.log(data);
  //   setClientId(data.id);
  // });
  // };

  // const camOnClick = async () => {
  //   if (camOn === true) {
  //     setCamOn(false);
  //     // await navigator.mediaDevices.getUserMedia({
  //     //   video: false,
  //     //   audio: false,
  //     // });
  //   } else {
  //     myStream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true,
  //     });
  //     setCamOn(true);
  //   }
  // };
  const changeClientId = (event) => {
    const result = event.target.value;
    setClientId(result);
  };
  const changeFriendId = (event) => {
    const result = event.target.value;
    setFriendId(result);
  };
  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <h3>
        ClientId
        <input onChange={changeClientId}></input>
      </h3>
      <h3>
        FriendId
        <input onChange={changeFriendId}></input>
      </h3>
      {/* <button onClick={camOnClick}>CamOn</button> */}
      <div className="row d-flex ">
        <div
          style={{
            width: "60%",
            height: "60vh",
            border: "solid",
            // backgroundColor: "black",
            float: "left",
            marginLeft: "50px",
          }}
        >
          <LiveVideo />
        </div>
        <div>
          <Chatting />
        </div>
      </div>
      <div className="row d-flex">
        <div
          style={{
            marginLeft: "50px",
            width: "60%",
            height: "13vh",
            border: "solid",
            // backgroundColor: "gray",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LiveLecture;
