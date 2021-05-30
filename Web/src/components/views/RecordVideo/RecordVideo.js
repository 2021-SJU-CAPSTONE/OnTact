import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Playercontrol from "./Playcontrol/Playcontrol";
import Subtitle from "./Subtitle";
import screenfull from "screenfull";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getBookmark, addBookmark, removeBookmark } from "../../utils/Lecture";
import { UseAuth } from "../../hoc/AuthContext";
const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
    height: "400px",
  },
});

const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

export default function RecordVideo() {
  const classes = useStyles();
  const [state, setState] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    comments: [],
  });

  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
  const [Bookmarks, setBookmarks] = useState([]);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const { playing, muted, volume, playbackRate, played, seeking, comments } =
    state;

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  //경원
  const getTime = () => {
    if (playerRef.current) {
      return playerRef.current.getCurrentTime();
    }
  };
  //
  //형찬
  const delRef = useRef(null);
  const userInfo = UseAuth().userInfo;
  const lectureId = "Capstone";
  const round = 2;
  React.useEffect(() => {
    if (userInfo) {
      getBookmark(lectureId, round, userInfo.id).then((data) => {
        setBookmarks(data);
      });
    }
  }, [userInfo]);
  //
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleonVolumeSeekUp = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const ToggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState) => {
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekchange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };
  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  let messages = "";
  const inputRef = useRef(null);
  const messagesend = (e) => {
    e.preventDefault();
    const newBookmark = {
      time: playerRef.current.getCurrentTime(),
      chat: inputRef.current.value,
    };
    setBookmarks([...Bookmarks, newBookmark]);
    if (inputRef.current) {
      messages = inputRef.current.value;
    }
    addBookmark(
      lectureId,
      round,
      userInfo.id,
      newBookmark.time,
      newBookmark.chat
    );
    inputRef.current.value = "";
    messages = "";
  };
  const onDelBookmark = (e) => {
    const removeTime = Number(e.target.id);
    const newBookmarks = Bookmarks.filter((bookmark) => {
      if (bookmark.time === removeTime) {
        return false;
      }
      return true;
    });
    setBookmarks(newBookmarks);
    removeBookmark(lectureId, round, userInfo.id, removeTime);
  };
  return (
    <>
      {userInfo && (
        <div className="row">
          {/* Top control */}

          <Container
            maxWidth="md"
            display="flex"
            style={{
              flexDirection: "row",
              float: "left",
              marginTop: "40px",
              marginLeft: 15,
            }}
            className="col-md-6"
          >
            <Card>
              <div
                ref={playerContainerRef}
                className={classes.playerWrapper}
                style={{ left: "50", marginTop: 50 }}
              >
                <ReactPlayer
                  ref={playerRef}
                  width={"100%"}
                  height={"100%"}
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  muted={muted}
                  playing={playing}
                  volume={volume}
                  playbackRate={playbackRate}
                  onProgress={handleProgress}
                />
                <Playercontrol
                  onPlayPause={handlePlayPause}
                  playing={playing}
                  onRewind={handleRewind}
                  onFastForward={handleFastForward}
                  muted={muted}
                  onMute={handleMute}
                  onVolumeChange={handleVolumeChange}
                  onVolumeSeekUp={handleonVolumeSeekUp}
                  volume={volume}
                  playbackRate={playbackRate}
                  onPlaybackRateChange={handlePlaybackRateChange}
                  onToggleFullScreen={ToggleFullScreen}
                  played={played}
                  onSeek={handleSeekchange}
                  onSeekMouseDown={handleSeekMouseDown}
                  onSeekMouseUp={handleSeekMouseUp}
                  elapsedTime={elapsedTime}
                  totalDuration={totalDuration}
                  onChangeDisplayFormat={handleChangeDisplayFormat}
                />
              </div>

              <Link to="/studentpage/recordlecturelist">
                <span
                  className="badge  mt-4"
                  style={{
                    width: "150px",
                    display: "block",
                    marginBottom: "20px",
                    fontSize: "1rem",
                    backgroundColor: "#D65E2A",
                    color: "white",
                  }}
                >
                  나가기
                </span>
              </Link>
            </Card>
          </Container>
          <div
            style={{
              paddingTop: "30px",
              paddingLeft: "30px",
            }}
            className="col-md-6"
          >
            <Card style={{ width: "70%", height: "60vh" }}>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                BookMark
              </h6>
              <div className="overflow-auto">
                {Bookmarks.map((bookmark, index) => (
                  <div
                    style={{
                      marginTop: 10,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      onClick={() => playerRef.current.seekTo(bookmark.time)}
                      style={{ fontWeight: "bold" }}
                    >
                      {format(bookmark.time)} : {bookmark.chat}
                    </span>
                    <button
                      style={{
                        backgroundColor: "#D65E2A",
                        color: "white",
                        marginLeft: 15,
                      }}
                      id={bookmark.time}
                      ref={delRef}
                      onClick={onDelBookmark}
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <form
                  style={{
                    top: "65vh",
                    float: "right",
                    position: "fixed",
                    alignItems: "center",
                  }}
                >
                  <input ref={inputRef} style={{ width: "580px" }} />
                  <button
                    type="submit"
                    onClick={(e) => {
                      messagesend(e);
                    }}
                    style={{
                      backgroundColor: "#D65E2A",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    입력
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
