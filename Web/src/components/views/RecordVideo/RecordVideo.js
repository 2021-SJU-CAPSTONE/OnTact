import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Playercontrol from "./Playcontrol/Playcontrol";

const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
    height: "400px",
  },
});

export default function RecordVideo() {
  const classes = useStyles();
  const [state, setState] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
  });
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const { playing, muted, volume } = state;

  const playerRef = useRef(null);
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

  const handleonVolumeSeekDown = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  return (
    <>
      {/* Top control */}
      <Container maxWidth="md">
        <div className={classes.playerWrapper}>
          <ReactPlayer
            ref={playerRef}
            width={"100%"}
            height={"100%"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            muted={muted}
            playing={playing}
            volume={volume}
          />
          <Playercontrol
            onPlayPause={handlePlayPause}
            playing={playing}
            onRewind={handleRewind}
            onFastForward={handleFastForward}
            muted={muted}
            onMute={handleMute}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleonVolumeSeekDown}
            volume={volume}
          />
        </div>
      </Container>
    </>
  );
}
