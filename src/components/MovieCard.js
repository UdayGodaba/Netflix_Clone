import React from "react";

import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-2">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
