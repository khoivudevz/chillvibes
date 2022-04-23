import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovieList: [],
  upComingMovieList: [],
  popularMovieList: [],
  topRatedMovieList: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setnowPlayingMovieList: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    setupComingMovieList: (state, action) => {
      state.upComingMovieList = action.payload;
    },
    setpopularMovieList: (state, action) => {
      state.popularMovieList = action.payload;
    },
    settopRatedMovieList: (state, action) => {
      state.topRatedMovieList = action.payload;
    },
  },
});
export const {
  setnowPlayingMovieList,
  setupComingMovieList,
  setpopularMovieList,
  settopRatedMovieList,
} = movieSlice.actions;
export default movieSlice.reducer;
