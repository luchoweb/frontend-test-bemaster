import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import { getMoviesByCategory } from "../../services/api-movies";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id: categoryId, page } = useParams();

  const [movies, setMovies] = useState<[Movie] | []>();

  useEffect(() => {
    const getGenres = async () => {
      const response = await getMoviesByCategory(categoryId, page);
      if(response?.movies) {
        setMovies(response.movies.items);
      }
    };

    getGenres();
  }, []);

  console.log(movies);

  return (
    <h1>CATEGORY</h1>
  );
}

export default CategoryPage;
