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
      <span>
        {sender} : {message}
      </span>
    </div>
  );
};

export default Message;
