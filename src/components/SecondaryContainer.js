import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="mt-0 lg:-mt-20 xl:-mt-30 2xl:-mt-52 pl-2 lg:pl-8 xl:pl-12 relative z-20">
        <MovieList
          title={lang[langKey].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[langKey].popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={lang[langKey].upComing}
          movies={movies.upComingMovies}
        />
        <MovieList
          title={lang[langKey].topRated}
          movies={movies.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
