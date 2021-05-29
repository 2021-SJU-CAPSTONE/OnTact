const Message = ({
  username,
  message,
  name,
}: {
  username: string;
  message: string;
  name?: string;
}) => {
  const sender = username === name ? "Me" : username;

  return (
    <div>
      <div className="sender" style={{fontWeight: "bold"}}>
        {sender}
      </div>
      <div
        style={{ marginTop: 10, border: "solid", width: "50%", borderRadius: 15 }}
      >
        <span style={{ fontWeight: "bold", paddingLeft: 20 }}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Message;
