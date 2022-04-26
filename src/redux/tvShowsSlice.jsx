import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShowList: [],
};

const tvShowsSlice = createSlice({
  name: "tvshows",
  initialState,
  reducers: {
    setTVShowList: (state, action) => {
      state.tvShowList = action.payload;
    },
  },
});
export const { setTVShowList } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
