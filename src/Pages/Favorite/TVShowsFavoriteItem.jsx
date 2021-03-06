import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "../../Components/MovieItem/movieItem.css";
import { BsStarFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { movieServices } from "../../services/movieService";
import { removeFavoriteList } from "../../redux/tvShowBookMarksSlice";
import TVShowsTrailerModal from "../../Components/TrailerModal/TVShowsTrailerModal";

export default function TVShowsFavoriteItem({ data }) {
  let dispatch = useDispatch();
  let handleRemoveBookmark = () => {
    dispatch(removeFavoriteList(data.id));
  };
  return (
    <div className="w-96 h-56 rounded-3xl overflow-hidden">
      <div className="w-full h-full relative">
        <img src={movieServices.getImageBig(data?.backdrop_path)} alt="" />
        <Link
          to={`/details/${data?.id}`}
          className="text-white hover:text-orangeColor"
        >
          <div>
            <CgMoreO
              className="absolute top-5 right-3 cursor-pointer "
              size={25}
            />
          </div>
        </Link>
        <div
          className="text-white hover:text-orangeColor "
          onClick={handleRemoveBookmark}
        >
          <BsFillBookmarkDashFill
            className="absolute top-14 right-3 cursor-pointer "
            size={25}
          />
        </div>
        <div className="w-full h-1/4 absolute bottom-0 backdrop-blur-sm bg-white/30 flex items-center justify-between px-5 titleFont">
          <div className="flex items-center justify-between space-x-2 ">
            <TVShowsTrailerModal data={data?.id} />
            <div className="cursor-default">
              <p className="mb-0 text-white">{data?.name}</p>
              <p className="mb-0 text-white">
                {moment(data?.first_air_date).format("MMMM YYYY")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 border-l-2 border-l-white/50 pl-7 ">
            <div>
              <BsStarFill size={20} color="white" />
            </div>
            <div className="text-white"> {data?.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
