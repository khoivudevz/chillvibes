import React from "react";
import { useSelector } from "react-redux";
import { RiArrowDropRightFill } from "react-icons/ri";
import NowPlaying from "../MovieItem/NowPlaying";
import Popular from "../MovieItem/Popular";
import TopRated from "../MovieItem/TopRated";
import UpComing from "../MovieItem/Upcoming";
import "./movieList.css";

export default function MovieList() {
  let nowPlayingMovieListData = useSelector(
    (state) => state.movieSlice.nowPlayingMovieList
  );
  let upComingMovieListData = useSelector(
    (state) => state.movieSlice.upComingMovieList
  );
  let popularMovieListData = useSelector(
    (state) => state.movieSlice.popularMovieList
  );
  let topRatedMovieListData = useSelector(
    (state) => state.movieSlice.topRatedMovieList
  );
  return (
    <div className="flex text-white space-x-5 my-5">
      <div className=" pr-5 border-r-grey border-r-8">
        <div className="flex items-center justify-between">
          <p className="text-3xl moveListFont cursor-default">Up Coming</p>
          <p id="upCSeeAll" className="flex items-center text-sm">
            See all <RiArrowDropRightFill size={40} />
          </p>
        </div>
        <div className="space-y-5 ">
          {upComingMovieListData.map((item, index) => {
            return index <= 3 ? <UpComing data={item} /> : <></>;
          })}
        </div>
      </div>
      <div className="grid grid-rows-3  ">
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Now Playing</p>
            <p id="upCSeeAll" className="flex items-center text-sm">
              See all <RiArrowDropRightFill size={40} />
            </p>
          </div>
          <div className="flex space-x-5 ">
            {nowPlayingMovieListData.map((item, index) => {
              return index <= 2 ? <NowPlaying data={item} /> : <></>;
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Popular</p>
            <p id="upCSeeAll" className="flex items-center text-sm">
              See all <RiArrowDropRightFill size={40} />
            </p>
          </div>
          <div className="flex space-x-5">
            {popularMovieListData.map((item, index) => {
              return index <= 2 ? <Popular data={item} /> : <></>;
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Top Rated</p>
            <p id="upCSeeAll" className="flex items-center text-sm">
              See all <RiArrowDropRightFill size={40} />
            </p>
          </div>
          <div className="flex space-x-5">
            {topRatedMovieListData.map((item, index) => {
              return index <= 2 ? <TopRated data={item} /> : <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
