import express from "express";
import cors from "cors";
import server from "http";

const app = express();
const serve = server.createServer(app);
const port = 5000;

//Middle ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/join", (req, res) => {
  const localID = req.body.localID;
  res.send({ some: "asdf" });
});

serve
  .listen(5000, () => {
    console.log(`listen in ${port}`);
  })
  .on("error", e => {
    console.error(e);
  });
