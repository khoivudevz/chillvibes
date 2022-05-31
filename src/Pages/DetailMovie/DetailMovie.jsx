import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import Player from "../../Components/Player/Player.js";
import moment from "moment";
import { Progress } from "antd";
import { useParams } from "react-router-dom";
import { movieServices } from "../../services/movieService";
import DetailMovieCarousel from "./DetailMovieCarousel";
import "../../Components/MovieItem/movieItem.css";
import UsersCmt from "./UsersCmt";
import { removeLoading, setLoading } from "../../redux/loadingSlice";
import Loading from "../../Components/Loading/Loading";
import { setFavoriteList } from "../../redux/favoriteListSlice";

export default function DetailMovie() {
  let { id } = useParams();
  const [inforData, setinforData] = useState(null);
  const [trailer, settrailer] = useState(null);
  const [similarMovies, setsimilarMovies] = useState(null);
  const [cmt, setcmt] = useState(null);
  let loading = useSelector((state) => state.loadingSlice.isLoading);
  let dispatch = useDispatch();
  let handleBookmark = () => {
    dispatch(setFavoriteList(inforData));
  };
  useEffect(() => {
    dispatch(setLoading());
    movieServices
      .getDetails(id)
      .then((res) => {
        setinforData(res.data);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
    dispatch(setLoading());
    movieServices
      .getTrailerMovie(id)
      .then((res) => {
        let trailerData = res.data.results;
        let trailerVideo = trailerData.filter((trailer) => {
          return trailer.type === "Trailer";
        });
        settrailer(trailerVideo);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
    dispatch(setLoading());
    movieServices
      .getSimilarMovies(id)
      .then((res) => {
        setsimilarMovies(res.data.results);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
    dispatch(setLoading());
    movieServices
      .getReviews(id)
      .then((res) => {
        setcmt(res.data.results);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="my-10">
            <div className="container mx-auto flex flex-col items-center justify-center ">
              <div className="w-2/3">
                <img
                  src={movieServices.getImageBig(inforData?.backdrop_path)}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-white">
                <div className="flex items-center justify-center space-x-3">
                  <p className="movieNameFont mt-10 text-4xl">
                    " {inforData?.title} "
                  </p>
                  <div
                    className="text-white hover:text-orangeColor "
                    onClick={handleBookmark}
                  >
                    <BsFillBookmarkHeartFill
                      className="cursor-pointer "
                      size={25}
                    />
                  </div>
                </div>
                <p className="overviewFont ">{inforData?.overview}</p>
              </div>
              <div className="my-5 w-full overflow-hidden flex items-center justify-center">
                <div className="w-2/3">
                  <Player
                    videoUrl={
                      trailer === null
                        ? ""
                        : `https://www.youtube.com/watch?v=${trailer[0]?.key}`
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 my-10">
                <div className="flex">
                  <Progress
                    type="circle"
                    percent={inforData?.vote_average * 10}
                  />{" "}
                  <div
                    className="flex flex-col items-center justify-center text-white pl-1 border-r-orangeColor border-r-8
             pr-5 "
                  >
                    <p className="mb-0 movieNameFont text-2xl">User </p>
                    <p className="mb-0 movieNameFont text-2xl">Score</p>
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-white overviewFont text-lg">
                    Runtime: {inforData?.runtime} minutes.
                  </p>
                  <p className="text-white overviewFont text-lg">
                    Release date:{" "}
                    {moment(inforData?.release_date).format("MMMM DD, YYYY")}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-10 hidden md:block ">
              <div className="container mx-auto ">
                <div className="grid grid-cols-3 gap-5">
                  {cmt?.map((item, index) => {
                    return index <= 5 ? <UsersCmt data={item} /> : <></>;
                  })}
                </div>
              </div>
            </div>
            <div className="my-20">
              <div className="container mx-auto">
                <DetailMovieCarousel data={similarMovies} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
