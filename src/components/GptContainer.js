import React from "react";

import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
