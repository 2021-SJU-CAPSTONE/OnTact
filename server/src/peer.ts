import express from "express";
import cors from "cors";
import peer from "peer";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const serv = app.listen(5000);
app.use("/peerjs", peer.ExpressPeerServer(serv));
