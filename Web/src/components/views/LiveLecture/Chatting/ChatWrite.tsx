import React from "react";

function ChatWrite() {
  return (
    <div
      style={{
        marginLeft: "20px",
        width: "30vw",
        height: "16vh",
        backgroundColor: "pink",
      }}
    >
      <div style={{ paddingTop: "2vh", height: "4vh" }}>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="채팅을 입력하세요"
          required
          style={{ height: "9vh" }}
        />
      </div>
    </div>
  );
}

export default ChatWrite;
