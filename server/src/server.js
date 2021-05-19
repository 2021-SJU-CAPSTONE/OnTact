const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const http = require("http");
const port = process.env.PORT || 5000;
const Index = "/index.html";
app.set("port", port);

//https://jinhyukoo.github.io/js/2020/12/13/peerJS%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0.html
app.use((req, res) => {
  res.sendFile(Index, { root: __dirname });
});
const server = http.createServer(app);
server.listen(port, () => console.log(`listen in ${port} port`));
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000", "https://capstone-925e4.web.app"],
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("[connected from]", socket.id, new Date());
  socket.on("join-room", (roomId, userId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

setInterval(() => io.emit("time", new Date().toTimeString()), 1000);
