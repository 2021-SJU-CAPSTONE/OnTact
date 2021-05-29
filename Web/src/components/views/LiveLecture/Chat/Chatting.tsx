import React from "react";
import { store } from "../../../firebase";
import firebase from "firebase";
import Message from "./Message";
import { Card } from "react-bootstrap";
type MessageType = {
  username: string;
  message: string;
};
const Chatting = ({
  name,
  lectureId,
}: {
  name?: string;
  lectureId: string;
}) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    store
      .collection(`Lecture/${lectureId}/Chatting`)
      .orderBy("timestamp", "asc")
      .onSnapshot((collection) => {
        setMessages(
          collection.docs.map((doc) => ({
            username: doc.data().username,
            message: doc.data().message,
          }))
        );
      });
  }, []);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name !== undefined) {
      if (inputRef.current) {
        store.collection(`Lecture/${lectureId}/Chatting`).add({
          message: inputRef.current.value,
          username: name,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessages([
          ...messages,
          { username: name, message: inputRef.current.value },
        ]);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <Card
      style={{
        height: "61vh",
        width: "680px",
        border: "solid",
        marginLeft: "20px",
        borderRadius: 10,
      }}
    >
      <div className="chatting_logo" style={{alignContent: "center", fontWeight: "bold", fontSize: 20}}>CHAT</div>
      <div style={{ paddingLeft: 50, marginTop: 20 }}>
        {messages.map(({ username, message }) => (
          <Message username={username} message={message} name={name} />
        ))}
      </div>
      <form
        style={{
          marginLeft: -23,
          paddingLeft: 5,
          top: "60.3vh",
          width: "35.4vw",
          position: "absolute",
          border: "solid",
          backgroundColor: "#C4C4C4",
          textAlign: "center",
        }}
      >
        <input
          style={{
            width: "29vw",
            height: "80px",
            borderRadius: 15,
            marginTop: "10px",
            marginBottom: "15px",
          }}
          ref={inputRef}
          placeholder=" 메세지를 입력하세요"
        />
        <button
          type="submit"
          style={{
            height: "85px",
            borderRadius: 15,
            width: "3vw",
            backgroundColor: "#D65E2A",
            color: "white",
          }}
          onClick={(e) => {
            sendMessage(e);
          }}
        >
          전송
        </button>
      </form>
    </Card>
  );
};

export default Chatting;
