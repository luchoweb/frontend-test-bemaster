import { Movie } from "../../types/movies";

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <h1>{movie.original_title}</h1>
  );
}

export default MovieCard;
