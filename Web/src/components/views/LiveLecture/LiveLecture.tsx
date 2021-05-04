import React, { useState, useEffect } from "react";
import Chatting from "./Chatting/Chatting";
import ChatWrite from "./Chatting/ChatWrite";
import LiveVideo from '../LiveVideo/LiveVideo'
import {socket} from './socket'

function LiveLecture() {
  const [clientId,setClientId] = useState("");

  useEffect(()=>{
    socket.on("init", (data:any) => setClientId(data.id)).emit("init"); 
  },[]);
  // function을 인자로 넘김으로 useState 변수를 넘길 수 있다.
  const startCall = (isCaller:boolean, friendIf:string, confing:any) => {
    socket.on("init",(data:any)=> {
      console.log(data);
      setClientId(data.id);
    })
  };

  return (
    <div style={{ paddingTop: "50px", minHeight: "calc(100vh - 80px" }}>
      <div className="row d-flex ">
        <div
          style={{
            width: "60%",
            height: "60vh",
            border : 'solid',
            // backgroundColor: "black",
            float: "left",
            marginLeft: "50px",
          }}
        >
          <LiveVideo clientId={clientId} startCall={startCall}/>
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
            border : 'solid',
            // backgroundColor: "gray",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LiveLecture;
