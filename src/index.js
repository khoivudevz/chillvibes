import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./redux/movieSlice";
import tvShowsSlice from "./redux/tvShowsSlice";
import favoriteListSlice from "./redux/favoriteListSlice";
import loadingSlice from "./redux/loadingSlice";
import tvShowBookMarksSlice from "./redux/tvShowBookMarksSlice";

const store = configureStore({
  reducer: {
    movieSlice,
    tvShowsSlice,
    favoriteListSlice,
    loadingSlice,
    tvShowBookMarksSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
