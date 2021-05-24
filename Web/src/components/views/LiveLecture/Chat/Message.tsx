const Message = ({
  username,
  message,
  localId,
}: {
  username: string;
  message: string;
  localId: string;
}) => {
  const sender = username === localId ? "Me" : username;

  return (
    <div
      style={{ marginTop: 10, border: "solid", width: "50%", borderRadius: 15 }}
    >
      <span style={{ fontWeight: "bold", paddingLeft: 20 }}>
        {sender} : {message}
      </span>
    </div>
  );
};

export default Message;
