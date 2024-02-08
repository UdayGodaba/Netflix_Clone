import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    movieDetails: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    removeTrailerVideo: (state) => {
      state.trailerVideo = null;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    removeAllData: (state, action) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.upComingMovies = null;
      state.topRatedMovies = null;
      state.trailerVideo = null;
      state.movieDetails = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addTrailerVideo,
  addMovieDetails,
  removeTrailerVideo,
  removeAllData,
} = moviesSlice.actions;
export default moviesSlice.reducer;
