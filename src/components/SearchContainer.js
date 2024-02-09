import React from "react";

import SearchBar from "./SearchBar";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const Search = () => {
  const searchResult = useSelector((store) => store.search.searchedMovies);
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="absolute -z-20">
        <img src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <SearchBar />
      <div className="bg-black opacity-90 mt-5">
        {searchResult && (
          <MovieList title={lang[langKey].results} movies={searchResult} />
        )}
      </div>
    </div>
  );
};

export default Search;
