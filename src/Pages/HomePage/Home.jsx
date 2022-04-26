import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    movieServices
      .getNowPlayingMovieList()
      .then((res) => {
        dispatch(setnowPlayingMovieList(res.data.results));
      })
      .catch((err) => {
        console.log("err", err);
      });
    movieServices
      .getUpComingMovieList()
      .then((res) => {
        dispatch(setupComingMovieList(res.data.results));
      })
      .catch((err) => {
        console.log("err", err);
      });
    movieServices
      .getTopRatedMovieList()
      .then((res) => {
        dispatch(settopRatedMovieList(res.data.results));
      })
      .catch((err) => {
        console.log("err", err);
      });
    movieServices
      .getPopularMovieList()
      .then((res) => {
        dispatch(setpopularMovieList(res.data.results));
      })
      .catch((err) => {
        console.log("err", err);
      });
    tvServices
      .getTopRatedTVShows()
      .then((res) => {
        dispatch(setTVShowList(res.data.results));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <MovieList />
    </div>
  );
}
