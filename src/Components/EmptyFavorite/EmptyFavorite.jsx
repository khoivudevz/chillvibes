import React from "react";
import { RiEmotionUnhappyLine } from "react-icons/ri";
export default function EmptyFavorite() {
  return (
    <div className="flex items-center justify-center space-x-3 h-screen">
      <RiEmotionUnhappyLine size={100} color="white" />{" "}
      <p className="text-white text-2xl">Favorite List Empty</p>
    </div>
  );
}
