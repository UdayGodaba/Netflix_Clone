import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS, GET_UPCOMING_MOVIES } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(GET_UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    if (!upComingMovies) {
      getUpComingMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpComingMovies;
