import axios from "axios";
import { API_KEY, DOMAIN, IMG_DOMAIN } from "../configUrl/constants";

const BASE_URL = DOMAIN;
const KEY = API_KEY;
const IMG_BASE_URL = IMG_DOMAIN;

export const tvServices = {
  getTopRatedTVShows() {
    return axios({
      url: `${BASE_URL}3/tv/popular?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getTopRatedTVShowsPage(page) {
    return axios({
      url: `${BASE_URL}3/tv/popular?api_key=${KEY}&language=en-US&page=${page}`,
      method: "GET",
    });
  },
  getDetails(path) {
    return axios({
      url: `${BASE_URL}3/tv/${path}?api_key=${KEY}&language=en-US`,
      method: "GET",
    });
  },
  getSimilarTVShows(path) {
    return axios({
      url: `${BASE_URL}3/tv/${path}/similar?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getReviews(path) {
    return axios({
      url: `${BASE_URL}3/tv/${path}/reviews?api_key=${KEY}&language=en-US&page=1`,
      method: "GET",
    });
  },
  getTrailerTVShows(path) {
    return axios({
      url: `${BASE_URL}3/tv/${path}/videos?api_key=${KEY}&language=en-US`,
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
