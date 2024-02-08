import React from "react";

import SearchBar from "./SearchBar";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Search = () => {
  const searchResult = useSelector((store) => store.search.searchedMovies);
  return (
    <div>
      <div className="absolute -z-20">
        <img src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <SearchBar />
      <div className="bg-black opacity-90 mt-5">
        {searchResult && <MovieList title={"Results"} movies={searchResult} />}
      </div>
    </div>
  );
};

export default Search;
