import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loadingSlice";
import {
  setnowPlayingMovieList,
  setpopularMovieList,
  settopRatedMovieList,
  setupComingMovieList,
} from "../../redux/movieSlice";
import { setTVShowList } from "../../redux/tvShowsSlice";
import { movieServices } from "../../services/movieService";
import { tvServices } from "../../services/tvService";
import MovieList from "./MovieList/MovieList";
import Loading from "../../Components/Loading/Loading";

export default function Home() {
  let loading = useSelector((state) => state.loadingSlice.isLoading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    movieServices
      .getNowPlayingMovieList()
      .then((res) => {
        dispatch(removeLoading());
        dispatch(setnowPlayingMovieList(res.data.results));
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
    dispatch(setLoading());
    movieServices
      .getUpComingMovieList()
      .then((res) => {
        dispatch(removeLoading());
        dispatch(setupComingMovieList(res.data.results));
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
    dispatch(setLoading());
    movieServices
      .getTopRatedMovieList()
      .then((res) => {
        dispatch(removeLoading());
        dispatch(settopRatedMovieList(res.data.results));
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
    dispatch(setLoading());
    movieServices
      .getPopularMovieList()
      .then((res) => {
        dispatch(removeLoading());
        dispatch(setpopularMovieList(res.data.results));
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
    dispatch(setLoading());
    tvServices
      .getTopRatedTVShows()
      .then((res) => {
        dispatch(removeLoading());
        dispatch(setTVShowList(res.data.results));
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <MovieList />
        </div>
      )}
    </>
  );
}
