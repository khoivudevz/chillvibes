import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import moment from "moment";
import { Progress } from "antd";
import { useParams } from "react-router-dom";
import { tvServices } from "../../services/tvService";
import "./detailMovie.css";
import DetailTVShowsCarousel from "./DetailTVShowsCarousel";
import UsersCmt from "./UsersCmt";
import { removeLoading, setLoading } from "../../redux/loadingSlice";
import Loading from "../../Components/Loading/Loading";
import { setFavoriteList } from "../../redux/favoriteListSlice";

export default function DetailTVShows() {
  let { id } = useParams();
  let handleBookmark = () => {
    dispatch(setFavoriteList(inforData));
  };
  const [inforData, setinforData] = useState(null);
  const [trailer, settrailer] = useState(null);
  const [similarTVShows, setsimilarTVShows] = useState(null);
  const [cmt, setcmt] = useState(null);
  let loading = useSelector((state) => state.loadingSlice.isLoading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    tvServices
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
    tvServices
      .getTrailerTVShows(id)
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
    tvServices
      .getSimilarTVShows(id)
      .then((res) => {
        setsimilarTVShows(res.data.results);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
    dispatch(setLoading());
    tvServices
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
          <div className="container mx-auto flex flex-col items-center justify-center my-10">
            <div className="w-2/3">
              <img
                src={tvServices.getImageBig(inforData?.backdrop_path)}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <p className="movieNameFont mt-10 text-4xl">
                  " {inforData?.original_name} "
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
            <div className="my-10">
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
                <DetailTVShowsCarousel data={similarTVShows} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
