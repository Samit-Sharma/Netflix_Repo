import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const trailer =
          res?.data?.results?.find((item) => item.type === "Trailer") ||
          res?.data?.results?.[0];

        dispatch(getTrailerMovie(trailer));
      } catch (error) {
        console.error(error);
      }
    };

    getMovieById();
  }, [dispatch, movieId]);
};

export default useMovieById;
