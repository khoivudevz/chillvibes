import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  count: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.count++;
      state.isLoading = true;
    },
    removeLoading: (state, action) => {
      state.count--;
      if (state.count === 0) {
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
    },
  },
});
export const { setLoading, removeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
