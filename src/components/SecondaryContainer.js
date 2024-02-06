import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Drama"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
