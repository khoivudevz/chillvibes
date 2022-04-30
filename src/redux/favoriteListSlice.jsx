import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  value: localStorage.getItem("bookmarksValue"),
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
const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    setFavoriteList: (state, action) => {
      if (state.favoriteListData !== null) {
        let localStorageData = localStorage.getItem("favoriteList");
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
          localStorage.setItem("bookmarksValue", state.value);
          state.favoriteListData.push(action.payload);
          localStorage.setItem(
            "favoriteList",
            JSON.stringify(state.favoriteListData)
          );
          Toast.fire({
            icon: "success",
            title: "Add bookmarks successfully",
          });
        }
      } else {
        let localStorageData = localStorage.getItem("favoriteList");
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
              "favoriteList",
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
              "favoriteList",
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
      let localStorageData = localStorage.getItem("favoriteList");
      let favoriteList = JSON.parse(localStorageData);
      let index = favoriteList
        .map((e) => {
          return e.id;
        })
        .indexOf(action.payload);
      favoriteList.splice(index, 1);
      localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
      Toast.fire({
        icon: "success",
        title: "Remove out of bookmarks successfully",
      });
    },
  },
});
export const { setFavoriteList, removeFavoriteList } =
  favoriteListSlice.actions;
export default favoriteListSlice.reducer;
