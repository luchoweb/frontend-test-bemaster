import { Link } from "react-router-dom";
import { Genre } from "../../types/movies";

import "./style.scss";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  return (
    <Link
      to={`/genre/${genre.id}-${genre.name.replace(" ", "-")}`}
      className="genre-card bg-dark text-light text-decoration-none text-center p-5"
    >
      {genre.name}
    </Link>
  );
};

export default GenreCard;
