import React from "react";

import SearchBar from "./SearchBar";
import { LOGIN_BACKGROUND } from "../utils/constants";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Search;
