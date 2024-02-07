import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS, GET_TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedMovies;
