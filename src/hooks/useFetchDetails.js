import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS, GET_MOVIE_DETAILS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";

const useFetchDetails = (movieId) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const data = await fetch(
      GET_MOVIE_DETAILS + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetchDetails;
