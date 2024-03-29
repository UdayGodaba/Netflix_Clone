import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(title, movies);
  if (!movies) return;
  return (
    <div className="px-6 py-2">
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl py-4 text-white ">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
