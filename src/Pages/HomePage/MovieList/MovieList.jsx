import React from "react";
import { useSelector } from "react-redux";
import NowPlaying from "../MovieItem/NowPlaying";
import Popular from "../MovieItem/Popular";
import TopRated from "../MovieItem/TopRated";
import UpComing from "../MovieItem/Upcoming";

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
      <div className="border-r-grey border-r-4">
        <p>Up Coming</p>
        <div className="space-y-5">
          {upComingMovieListData.map((item, index) => {
            return index <= 2 ? <UpComing data={item} /> : <></>;
          })}
        </div>
      </div>
      <div className="grid grid-rows-3 ">
        <div>
          <p>Now Playing</p>
          <div className="flex space-x-5">
            {nowPlayingMovieListData.map((item, index) => {
              return index <= 2 ? <NowPlaying data={item} /> : <></>;
            })}
          </div>
        </div>
        <div>
          <p>Popular</p>
          <div className="flex space-x-5">
            {popularMovieListData.map((item, index) => {
              return index <= 2 ? <Popular data={item} /> : <></>;
            })}
          </div>
        </div>
        <div>
          <p>Top Rated</p>
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
