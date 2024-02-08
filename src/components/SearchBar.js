import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import {
  API_OPTIONS,
  GET_SPECIFIC_MOVIES,
  API_SEARCH_ADD_ONS,
} from "../utils/constants";
import { addSearchedMovies } from "../utils/searchSlice";

const SearchBar = () => {
  const dispath = useDispatch();

  const searchText = useRef(null);

  const handleClick = async () => {
    const moviesData = await fetch(
      GET_SPECIFIC_MOVIES + searchText.current.value + API_SEARCH_ADD_ONS,
      API_OPTIONS
    );

    const json = await moviesData.json();
    // console.log(json);
    dispath(addSearchedMovies(json));
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
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
