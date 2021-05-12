import io from "socket.io";
import * as users from "./users";

const initSocket = socket => {
  let id;
  socket
    .on("init", async () => {
      id = await users.create(socket);
      socket.emit("init", { id });
    })
    .on("request", data => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit("request", { from: id });
      }
    })
    .on("call", data => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit("call", { ...data, from: id });
      } else {
        socket.emit("failed");
      }
    })
    .on("end", data => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit("end");
      }
    })
    .on("disconnect", () => {
      users.remove(id);
      console.log(id, "disconnected");
    });
};

export const socket = server => {
  io.listen(server, { log: true }).on("connection", initSocket);
};
