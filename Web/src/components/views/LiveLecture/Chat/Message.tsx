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
    <div>
      <span>
        {sender} : {message}
      </span>
    </div>
  );
};

export default Message;
