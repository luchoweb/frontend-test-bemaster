import { Link } from "react-router-dom";
import { Movie } from "../../types";

import "./styles.scss";
import { APP } from "../../utils/constants";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { BASE_URL_MOVIE_BG: bgBaseUrl } = APP;

  return (
    <Link
      to={`/movie/${movie.id}-${movie.original_title
        .replace(/ /g, "-")
        .toLowerCase()}`}
      className="movie-card bg-dark text-decoration-none text-center p-5"
      style={{
        backgroundImage: `url(${bgBaseUrl}${movie.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <span className="movie-card-overlay"></span>
      <span className="movie-card-name text-light">{movie.original_title}</span>
    </Link>
  );
};

export default MovieCard;
