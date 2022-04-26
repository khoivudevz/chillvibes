import React from "react";
import moment from "moment";
import "./movieItem.css";
import { BsStarFill } from "react-icons/bs";
import { movieServices } from "../../../services/movieService";
import TrailerModal from "../../../Components/TrailerModal/TrailerModal";

export default function NowPlaying({ data }) {
  return (
    <div className="w-96 h-56 rounded-3xl overflow-hidden">
      <div className="w-full h-full relative">
        <img src={movieServices.getImageBig(data.backdrop_path)} alt="" />
        <div className="w-full h-1/4 absolute bottom-0 backdrop-blur-sm bg-white/30 flex items-center justify-between px-5 titleFont">
          <div className="flex items-center justify-between space-x-2 ">
            <TrailerModal data={data.id} />
            <div className="cursor-default">
              <p className="mb-0">{data.original_title}</p>
              <p className="mb-0">
                {moment(data.release_date).format("MMMM YYYY")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 border-l-2 border-l-white/50 pl-7 ">
            <div>
              <BsStarFill size={20} />
            </div>
            <div> {data.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
