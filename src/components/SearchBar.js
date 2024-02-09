import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  API_OPTIONS,
  GET_SPECIFIC_MOVIES,
  API_SEARCH_ADD_ONS,
} from "../utils/constants";
import { addSearchedMovies } from "../utils/searchSlice";
import lang from "../utils/languageConstants";

const SearchBar = () => {
  const dispath = useDispatch();

  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);

  const handleClick = async () => {
    const moviesData = await fetch(
      GET_SPECIFIC_MOVIES + searchText.current.value + API_SEARCH_ADD_ONS,
      API_OPTIONS
    );

    const json = await moviesData.json();
    // console.log(json);
    dispath(addSearchedMovies(json.results));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
