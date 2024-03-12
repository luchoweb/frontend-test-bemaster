import { Link } from "react-router-dom";
import { Movie } from "../../types";
import { APP } from "../../utils/constants";

import "./styles.scss";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { BASE_URL_MOVIE_POSTER: bgBaseUrl } = APP;

  return (
    <Link
      to={`/movie/${movie.id}-${movie.original_title
        .replace(/ /g, "-")
        .toLowerCase()}`}
      className="movie-card bg-dark text-decoration-none text-center p-5"
      style={{
        backgroundImage: `url(${bgBaseUrl}${movie.poster_path})`,
        backgroundSize: "cover",
      }}
    ></Link>
  );
};

export default MovieCard;
