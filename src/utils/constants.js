export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_ICON =
  "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe3AS8xWNNmm8HlokLrmgIPqxgDohbraAUmm3dQrgmRf7U13AMm-4aXXkLFYD4lyDg6bNvqt_2Lc8cdtEM9Y2n3TDYTrXqQ.png?r=b39";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB,
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
];

export const GET_MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";

export const GET_NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=2";

export const GET_TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const GET_UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const GET_SPECIFIC_MOVIES =
  "https://api.themoviedb.org/3/search/movie?query=";

export const API_SEARCH_ADD_ONS = "&include_adult=false&language=en-US&page=1";
