import express from "express";
import { createServer } from "http";
import { socket } from "./socket";

const app = express();
const server = createServer(app);

app.use("/", express.static(`${process.cwd()}/../client/build`));

export const run = (port: number) => {
  server.listen(port);
  socket(server);
  console.log(`server is listening at :${port}`);
};
