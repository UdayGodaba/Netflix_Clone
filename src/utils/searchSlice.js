import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    searchedMovies: null,
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    removeSearchedMovies: (state) => {
      state.searchedMovies = null;
    },
  },
});

export const { toggleSearchView, addSearchedMovies, removeSearchedMovies } =
  searchSlice.actions;
export default searchSlice.reducer;
