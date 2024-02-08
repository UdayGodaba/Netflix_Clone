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
  },
});

export const { toggleSearchView, addSearchedMovies } = searchSlice.actions;
export default searchSlice.reducer;
