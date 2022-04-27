import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import moment from "moment";
import { Progress } from "antd";
import { useParams } from "react-router-dom";
import { movieServices } from "../../services/movieService";
import DetailMovieCarousel from "./DetailMovieCarousel";
import "../../Components/MovieItem/movieItem.css";
export default function DetailMovie() {
  let { id } = useParams();
  const [inforData, setinforData] = useState(null);
  const [trailer, settrailer] = useState(null);
  const [similarMovies, setsimilarMovies] = useState(null);
  useEffect(() => {
    movieServices
      .getDetails(id)
      .then((res) => {
        setinforData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    movieServices
      .getTrailerMovie(id)
      .then((res) => {
        let trailerData = res.data.results;
        let trailerVideo = trailerData.filter((trailer) => {
          return trailer.type === "Trailer";
        });
        settrailer(trailerVideo);
      })
      .catch((err) => {
        console.log("err", err);
      });
    {
      movieServices
        .getSimilarMovies(id)
        .then((res) => {
          setsimilarMovies(res.data.results);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);
  return (
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
            <p className="movieNameFont mt-10 text-4xl">
              " {inforData?.title} "
            </p>
            <p className="overviewFont ">{inforData?.overview}</p>
          </div>
          <div className="my-5">
            <ReactPlayer
              url={
                trailer === null
                  ? ""
                  : `https://www.youtube.com/watch?v=${trailer[0]?.key}`
              }
            />
          </div>
          <div className="grid grid-cols-2 my-10">
            <div className="flex">
              <Progress type="circle" percent={inforData?.vote_average * 10} />{" "}
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
        <div className="my-20">
          <div className="container mx-auto">
            <DetailMovieCarousel data={similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}
