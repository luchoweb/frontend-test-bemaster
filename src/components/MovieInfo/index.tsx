import { Movie } from "../../types";
import { getMovieYear } from "../../utils/dates";
import { formatCurrency } from "../../utils/format";

interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <ul className="movie-more-info">
      <li>
        <p className="m-0">
          <strong>Rating</strong>:{" "}
          <span>
            {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
          </span>
        </p>
      </li>
      <li>
        <p className="m-0">
          <strong>Release date</strong>: {getMovieYear(movie.release_date)}
        </p>
      </li>
      <li>
        <p className="m-0">
          <strong>Budget</strong>: {formatCurrency(movie.budget)}
        </p>
      </li>
      <li>
        <p className="m-0">
          <strong>Revenue</strong>: {formatCurrency(movie.revenue)}
        </p>
      </li>
    </ul>
  );
};

export default MovieInfo;
