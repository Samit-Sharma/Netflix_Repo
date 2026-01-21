// Backend
export const API_END_POINT = process.env.REACT_APP_API_URL;

// TMDB
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const Now_Playing_Movie = `${TMDB_BASE_URL}/movie/now_playing`;
export const Popular_Movie = `${TMDB_BASE_URL}/movie/popular`;
export const Top_Rated_Movie = `${TMDB_BASE_URL}/movie/top_rated`;
export const Upcoming_Movie = `${TMDB_BASE_URL}/movie/upcoming`;

export const SEARCH_MOVIE_URL = `${TMDB_BASE_URL}/search/movie`;

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

// TMDB headers
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  },
  timeout: 15000 // 15 second timeout for TMDB API
}
