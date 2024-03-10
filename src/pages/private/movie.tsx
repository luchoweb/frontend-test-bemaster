import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../services/api-movies";
import { Movie } from "../../types/movies";

import Layout from "./layout";
import { MovieHero } from "../../components";

const MoviePage = () => {
  const { slug } = useParams();
  const params = slug?.split("-");

  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await getMovieInfo(params?.[0]);
      if (response?.movie) {
        setMovie(response.movie);
      }
    };

    getMovie();
  }, [slug]);

  console.log(movie)

  return movie && (
    <Layout>
      <MovieHero movie={movie} />

      <section className="bg-light movie-overview py-4">
        <div className="container">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </section>
    </Layout>
  );
};

export default MoviePage;
