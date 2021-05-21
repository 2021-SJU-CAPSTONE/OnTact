import React from "react";
import { store } from "../../../firebase";
import firebase from "firebase";
import Message from "./Message";
type MessageType = {
  username: string;
  message: string;
};
const Chatting = ({ localId, lectureId }: { localId: string; lectureId: string }) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    store
      .collection(`Lecture/${lectureId}/Chatting`)
      .orderBy("timestamp", "asc")
      .onSnapshot(collection => {
        setMessages(
          collection.docs.map(doc => ({
            username: doc.data().username,
            message: doc.data().message,
          }))
        );
      });
  }, []);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log("[localId]", localId);
      store.collection(`Lecture/${lectureId}/Chatting`).add({
        message: inputRef.current.value,
        username: localId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessages([...messages, { username: localId, message: inputRef.current.value }]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="Chatting">
      <div>
        {messages.map(({ username, message }) => (
          <Message username={username} message={message} localId={localId} />
        ))}
      </div>
      <form>
        <label>메세지를 입력하세요...</label>
        <input ref={inputRef} />
        <button
          type="submit"
          onClick={e => {
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
