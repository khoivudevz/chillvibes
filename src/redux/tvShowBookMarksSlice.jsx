import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  value: localStorage.getItem("tvBookmarksValue"),
  favoriteListData: null,
};
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const tvShowBookmarksSlice = createSlice({
  name: "tvShowBookmarksSplice",
  initialState,
  reducers: {
    setFavoriteList: (state, action) => {
      if (state.favoriteListData !== null) {
        let localStorageData = localStorage.getItem("tvShowBookmarks");
        let favoriteList = JSON.parse(localStorageData);
        let movieIDList = favoriteList.map((movie) => {
          return movie.id;
        });
        let movieID = movieIDList.filter((id) => id === action.payload.id);
        if (movieID[0] === action.payload.id) {
          Toast.fire({
            icon: "error",
            title: "This movie already exists in bookmarks!",
          });
        } else {
          state.value++;
          localStorage.setItem("tvBookmarksValue", state.value);
          state.favoriteListData.push(action.payload);
          localStorage.setItem(
            "tvShowBookmarks",
            JSON.stringify(state.favoriteListData)
          );
          Toast.fire({
            icon: "success",
            title: "Add bookmarks successfully",
          });
        }
      } else {
        let localStorageData = localStorage.getItem("tvShowBookmarks");
        let favoriteList = JSON.parse(localStorageData);
        if (favoriteList !== null) {
          state.favoriteListData = favoriteList;
          let movieIDList = state.favoriteListData.map((movie) => {
            return movie.id;
          });
          let movieID = movieIDList.filter((id) => id === action.payload.id);
          if (movieID[0] === action.payload.id) {
            Toast.fire({
              icon: "error",
              title: "This movie already exists in bookmarks!",
            });
          } else {
            state.value++;
            localStorage.setItem("bookmarksValue", state.value);
            state.favoriteListData.push(action.payload);
            localStorage.setItem(
              "tvShowBookmarks",
              JSON.stringify(state.favoriteListData)
            );
            Toast.fire({
              icon: "success",
              title: "Add bookmarks successfully",
            });
          }
        } else {
          state.favoriteListData = [];
          let movieIDList = state.favoriteListData.map((movie) => {
            return movie.id;
          });
          let movieID = movieIDList.filter((id) => id === action.payload.id);
          if (movieID[0] === action.payload.id) {
            Toast.fire({
              icon: "error",
              title: "This movie already exists in bookmarks!",
            });
          } else {
            state.value++;
            localStorage.setItem("bookmarksValue", state.value);
            state.favoriteListData.push(action.payload);
            localStorage.setItem(
              "tvShowBookmarks",
              JSON.stringify(state.favoriteListData)
            );
            Toast.fire({
              icon: "success",
              title: "Add bookmarks successfully",
            });
          }
        }
      }
    },
    removeFavoriteList: (state, action) => {
      state.value--;
      localStorage.setItem("bookmarksValue", state.value);
      let localStorageData = localStorage.getItem("tvShowBookmarks");
      let favoriteList = JSON.parse(localStorageData);
      let index = favoriteList
        .map((e) => {
          return e.id;
        })
        .indexOf(action.payload);
      favoriteList.splice(index, 1);
      localStorage.setItem("tvShowBookmarks", JSON.stringify(favoriteList));
      Toast.fire({
        icon: "success",
        title: "Remove out of bookmarks successfully",
      });
    },
  },
});
export const { setFavoriteList, removeFavoriteList } =
  tvShowBookmarksSlice.actions;
export default tvShowBookmarksSlice.reducer;
