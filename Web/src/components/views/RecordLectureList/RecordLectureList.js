import React, { useState } from "react";
import Cardlist from "./Card/Cardlist";
import { Link } from "react-router-dom";
import { store } from "../../firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function RecordLectureList() {
  const showList = () => {
    // const lecList;
    // return <div>{lecList}</div>
  };

  // async function name() {
  //   const lecRef = store.collection("Lecture").doc("Capstone");
  //   const collections = await lecRef.listCollections();
  //   collections((collection) => {
  //     console.log("find something", collection.id);
  //   });
  //   console.log("aaaaaaa", lecRef);
  // }
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className="card overflow-auto"
      style={{ width: "80%", marginLeft: "50px" }}
    >
      <div className="col-md-6">
        <span
          className="badge "
          style={{
            width: "100px",
            display: "block",
            marginBottom: "20px",
            fontSize: "1rem",
            backgroundColor: "#D65E2A",
            color: "white",
          }}
        >
          강의명
        </span>
        <span
          className="badge "
          style={{
            width: "300px",
            display: "block",
            fontSize: "1rem",
            backgroundColor: "#D65E2A",
            color: "white",
          }}
        >
          Capstone Design(001)
        </span>
      </div>
      <Link to="/recordvideo">
        <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  캡스톤 디자인
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  1회차
                </Typography>
              </CardContent>
              <div className={classes.controls}></div>
            </div>
          </Card>
        </div>
      </Link>

      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                2회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                3회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                4회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                5회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                6회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
      <div style={{ paddingLeft: "100px", paddingTop: "50px", width: "60%" }}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                캡스톤 디자인
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                7회차
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
