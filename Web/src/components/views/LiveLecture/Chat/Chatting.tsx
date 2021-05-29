import React from "react";
import { store } from "../../../firebase";
import firebase from "firebase";
import Message from "./Message";
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
    <div
      style={{
        height: "73vh",
        width: "680px",
        border: "solid",
        marginLeft: "20px",
        borderRadius: 10,
      }}
    >
      <div style={{ paddingLeft: 50, marginTop: 20 }}>
        {messages.map(({ username, message }) => (
          <Message username={username} message={message} name={name} />
        ))}
      </div>
      <form
        style={{
          paddingLeft: 5,
          top: "82vh",
          position: "absolute",
          border: "solid",
        }}
      >
        <input
          style={{ width: "620px", height: "100px" }}
          ref={inputRef}
          placeholder="메세지를 입력하세요"
        />
        <button
          className="btn-warning"
          type="submit"
          style={{ height: "105px" }}
          onClick={(e) => {
            sendMessage(e);
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default Chatting;
