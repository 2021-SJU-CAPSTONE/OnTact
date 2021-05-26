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
