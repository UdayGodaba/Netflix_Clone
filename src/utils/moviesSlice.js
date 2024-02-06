import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    removeAllData: (state, action) => {
      state.nowPlayingMovies = null;
      state.trailerVideo = null;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, removeAllData } =
  moviesSlice.actions;
export default moviesSlice.reducer;
