import React, { useEffect } from "react";
import { useState } from "react";
import { movieServices } from "../../../services/movieService";

export default function Upcoming({ data }) {
  console.log("data", data);

  return (
    <div className="w-96 h-56 rounded-3xl overflow-hidden">
      <div>
        <img src={movieServices.getImageBig(data.backdrop_path)} alt="" />
      </div>
    </div>
  );
}
