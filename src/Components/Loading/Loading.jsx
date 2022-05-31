import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../../assets/loading/loading.json";

export default function Loading() {
  return (
    <div className="fixed h-screen w-screen bg-grey flex items-center justify-center">
      <Player
        autoplay
        loop
        mode="normal"
        src={loading}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
