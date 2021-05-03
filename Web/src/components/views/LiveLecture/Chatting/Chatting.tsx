import React from "react";
import "react-chatbox-component/dist/style.css";
import { ChatBox } from "react-chatbox-component";

const messages = [
  {
    text: "Hello there",
    id: "1",
    sender: {
      name: "Ironman",
      uid: "user1",
      avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
    },
  },
];
const user = {
  uid: "user1",
};

function Chatting() {
  return (
    <div
      style={{
        marginLeft: "20px",
        width: "30vw",
        height: "60vh",
      }}
    >
      <ChatBox messages={messages} user={user} />
    </div>
  );
}

export default Chatting;
