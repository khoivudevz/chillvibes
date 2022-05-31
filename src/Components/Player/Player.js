import React from "react";
import ReactPlayer from "react-player";
import "./player.css";
export default function Player({ videoUrl }) {
  return (
    <div className="player-wrapper w-full">
      <ReactPlayer
        url={videoUrl}
        className="react-player"
        width="100%"
        height="100%"
      />
    </div>
  );
}
