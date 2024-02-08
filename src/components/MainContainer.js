import React from "react";
import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.popularMovies);
  // To avoid breakdown as there will be nothing initially inside store if I try to access movies[0] it will break
  if (movies === null) return;
  const idx = Math.floor(Math.random() * (movies.length - 1));
  const mainMovie = movies[idx];
  // console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
