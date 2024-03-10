import { Link } from "react-router-dom";
import { Genre } from "../../types/movies";

import "./style.scss";

interface Props {
  category: Genre;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="category-card d-block bg-dark text-light text-decoration-none text-center p-5"
    >
      {category.name}
    </Link>
  );
};

export default CategoryCard;
