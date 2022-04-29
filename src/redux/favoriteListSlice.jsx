import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  value: localStorage.getItem("bookmarksValue"),
  favoriteListData: [],
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
      state.value++;
      localStorage.setItem("bookmarksValue", state.value);
      state.favoriteListData.push(action);
      localStorage.setItem(
        "localStorage",
        JSON.stringify(state.favoriteListData)
      );
      Toast.fire({
        icon: "success",
        title: "Add to bookmarks successfully",
      });
    },
    removeFavoriteList: (state, action) => {
      state.value--;
      localStorage.setItem("bookmarksValue", state.value);
      let localStorageData = localStorage.getItem("localStorage");
      let favoriteList = JSON.parse(localStorageData);
      let index = favoriteList
        .map((e) => {
          return e.payload.id;
        })
        .indexOf(action.payload);
      favoriteList.splice(index, 1);
      localStorage.setItem("localStorage", JSON.stringify(favoriteList));
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
