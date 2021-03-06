import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./movieItem.css";
import { BsStarFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

import { movieServices } from "../../services/movieService";
import TrailerModal from "../../Components/TrailerModal/TrailerModal";
import { useDispatch } from "react-redux";
import { setFavoriteList } from "../../redux/favoriteListSlice";

export default function MovieItem({ data }) {
  let dispatch = useDispatch();
  let handleBookmark = () => {
    dispatch(setFavoriteList(data));
  };

  return (
    <div className="lg:w-[14rem] xl:w-96 h-56 rounded-3xl overflow-hidden">
      <div className="w-full h-full relative">
        <img
          className="object-cover w-full h-full"
          src={movieServices.getImageBig(data?.backdrop_path)}
          alt=""
        />
        <Link
          to={`/details/${data?.id}`}
          className="text-white hover:text-orangeColor transition-all"
        >
          <div>
            <CgMoreO
              className="absolute top-5 right-3 cursor-pointer "
              size={25}
            />
          </div>
        </Link>
        <div
          className="text-white hover:text-orangeColor transition-all"
          onClick={handleBookmark}
        >
          <BsFillBookmarkHeartFill
            className="absolute top-14 right-3 cursor-pointer "
            size={25}
          />
        </div>
        <div className="w-full h-1/4 absolute bottom-0 backdrop-blur-sm bg-white/30 flex items-center justify-between px-5 titleFont">
          <div className="flex items-center justify-between space-x-2  ">
            <div className="hidden md:block">
              <TrailerModal data={data?.id} />
            </div>
            <div className="cursor-default">
              <p className="mb-0 text-white ">{data?.title}</p>
              <p className="mb-0 text-white hidden lg:block ">
                {moment(data?.release_date).format("MMMM YYYY")}
              </p>
            </div>
          </div>
          <div className="items-center justify-center border-l-2 border-l-white/50 pl-7 hidden xl:flex ">
            <div>
              <BsStarFill size={20} color="white" />
            </div>
            <div className="text-white">{data?.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
