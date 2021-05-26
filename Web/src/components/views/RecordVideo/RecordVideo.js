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
  const aaRef = React.useRef(null);
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

  const addBookmark = (event) => {
    setBookmarks([
      ...Bookmarks,
      {
        time: playerRef.current.getCurrentTime(),
        display: format(currentTime),
      },
    ]);
  };
  let messages = "";
  const inputRef = useRef(null);
  const [message, setMessage] = useState([]);
  const messagesend = (e) => {
    e.preventDefault();
    setBookmarks([
      ...Bookmarks,
      {
        time: playerRef.current.getCurrentTime(),
        display: format(currentTime),
        chat: inputRef.current.value,
      },
    ]);
    if (inputRef.current) {
      messages = inputRef.current.value;
    }
    inputRef.current.value = "";
    console.log(inputRef.current.value);
    messages = "";
    console.log(messages);
    console.log(Bookmarks);
  };

  return (
    <div>
      {/* Top control */}
      <Container
        maxWidth="md"
        display="flex"
        style={{ flexDirection: "row", float: "left", marginTop: "40px" }}
      >
        <div
          ref={playerContainerRef}
          className={classes.playerWrapper}
          style={{ left: "50" }}
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
            onBookmark={addBookmark}
          />
        </div>

        <Link to="/studentpage/recordlecturelist">
          <span
            className="badge  mt-4"
            style={{
              width: "100px",
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
      </Container>
      <div
        style={{
          paddingTop: "30px",
        }}
      >
        <h6 style={{ marginLeft: "1200px", fontWeight: "bold", fontSize: 30 }}>
          채팅창
        </h6>

        <div>
          {Bookmarks.map((bookmark, index) => (
            <div
              style={{
                marginTop: 10,
                paddingLeft: "1250px",
              }}
            >
              <span
                onClick={() => playerRef.current.seekTo(bookmark.time)}
                style={{ fontWeight: "bold" }}
              >
                {bookmark.display} : {bookmark.chat}
              </span>
            </div>
          ))}
        </div>
        <form
          style={{
            top: "600px",
            float: "right",
            left: "1200px",
            position: "absolute",
          }}
        >
          <input ref={inputRef} style={{ width: "600px" }} />
          <button
            type="submit"
            onClick={(e) => {
              messagesend(e);
            }}
          >
            입력
          </button>
        </form>
      </div>
    </div>
  );
}
