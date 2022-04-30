import React from "react";
import { useSelector } from "react-redux";
import { RiArrowDropRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../../Components/MovieItem/movieItem.css";
import MovieItem from "../../../Components/MovieItem/MovieItem";
import TvShowsItem from "../../../Components/MovieItem/TvShowsItem";

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
  let tvShowListData = useSelector((state) => state.tvShowsSlice.tvShowList);
  return (
    <div className="md:block lg:flex text-white space-x-5 my-5">
      <div className=" pr-5 border-r-grey border-r-8 ">
        <div className="flex items-center justify-between">
          <p className="sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl moveListFont cursor-default">
            Up Coming
          </p>
          <div className="aLink">
            <Link to="/upcoming">
              <p id="upCSeeAll" className="flex items-center text-sm">
                See all <RiArrowDropRightFill size={40} />
              </p>
            </Link>
          </div>
        </div>
        <div className="space-y-5 ">
          {upComingMovieListData.map((item, index) => {
            return index <= 4 ? <MovieItem data={item} /> : <></>;
          })}
        </div>
      </div>
      <div className=" h-full overflow-hidden">
        <div className="my-4 ">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Now Playing</p>
            <div className="aLink">
              <Link to="/nowplaying">
                <p id="upCSeeAll" className="flex items-center text-sm">
                  See all <RiArrowDropRightFill size={40} />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex space-x-5 ">
            {nowPlayingMovieListData.map((item, index) => {
              return index <= 2 ? <MovieItem data={item} /> : <></>;
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">TV Shows</p>
            <div className="aLink">
              <Link to="/tvshows">
                <p id="upCSeeAll" className="flex items-center text-sm">
                  See all <RiArrowDropRightFill size={40} />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex space-x-5">
            {tvShowListData.map((item, index) => {
              return index <= 2 ? <TvShowsItem data={item} /> : <></>;
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Popular</p>
            <div className="aLink">
              <Link to="/popular">
                <p id="upCSeeAll" className="flex items-center text-sm">
                  See all <RiArrowDropRightFill size={40} />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex space-x-5">
            {popularMovieListData.map((item, index) => {
              return index <= 2 ? <MovieItem data={item} /> : <></>;
            })}
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl moveListFont cursor-default">Top Rated</p>
            <div className="aLink">
              <Link to="/toprated">
                <p id="upCSeeAll" className="flex items-center text-sm">
                  See all <RiArrowDropRightFill size={40} />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex space-x-5">
            {topRatedMovieListData.map((item, index) => {
              return index <= 2 ? <MovieItem data={item} /> : <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
