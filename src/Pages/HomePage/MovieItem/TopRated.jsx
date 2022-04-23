import React from "react";
import { movieServices } from "../../../services/movieService";

export default function TopRated({ data }) {
  return (
    <div className="w-96 h-56 rounded-3xl overflow-hidden">
      <div>
        <img src={movieServices.getImageBig(data.backdrop_path)} alt="" />
      </div>
    </div>
  );
}
