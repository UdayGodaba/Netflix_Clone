import React from "react";

import { IMG_CDN } from "../utils/constants";
import fallback_img from "../assets/no-poster.png";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 px-2 hover:px-3">
      <img
        alt="Movie Card"
        src={posterPath ? IMG_CDN + posterPath : fallback_img}
      />
    </div>
  );
};

export default MovieCard;
