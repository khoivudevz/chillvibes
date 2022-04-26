import axios from "axios";
import { API_KEY, DOMAIN, IMG_DOMAIN } from "../configUrl/constants";

const BASE_URL = DOMAIN;
const KEY = API_KEY;
const IMG_BASE_URL = IMG_DOMAIN;
export const movieServices = {
  getNowPlayingMovieList() {
    return axios({
      url: `${BASE_URL}3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getUpComingMovieList() {
    return axios({
      url: `${BASE_URL}3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getPopularMovieList() {
    return axios({
      url: `${BASE_URL}3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getTopRatedMovieList() {
    return axios({
      url: `${BASE_URL}3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getTrailerMovie(path) {
    return axios({
      url: `${BASE_URL}3/movie/${path}/videos?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getSimilarMovies(path) {
    return axios({
      url: `${BASE_URL}3/movie/${path}/similar?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getReviews(path) {
    return axios({
      url: `${BASE_URL}3/movie/${path}/reviews?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getTrendingMovies() {
    return axios({
      url: `${BASE_URL}3/movie/3/trending/all/week?api_key=${KEY}`,
      method: "GET",
    });
  },
  getImageBig(path) {
    return `${IMG_BASE_URL}t/p/original/${path}`;
  },
  getImageSmall(path) {
    return `${IMG_BASE_URL}t/p/w500/${path}`;
  },
};
