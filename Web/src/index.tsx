import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import LiveLecture from "../src/components/views/LiveLecture/LiveLecture";
ReactDOM.render(
  <BrowserRouter>
    <LiveLecture />
  </BrowserRouter>,

  document.getElementById("root")
);
