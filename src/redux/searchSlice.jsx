import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setsearchData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setsearchData } = searchSlice.actions;
export default searchSlice.reducer;
