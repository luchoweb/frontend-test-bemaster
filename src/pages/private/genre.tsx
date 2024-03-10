import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../types";
import { getMoviesByGenre } from "../../services/api-movies";

import { Loader, MovieCard, NoContent } from "../../components";
import Layout from "./layout";

const GenrePage = () => {
  const navigate = useNavigate();
  const { slug, page } = useParams();

  const urlParams = slug?.split("-");
  const genreId = urlParams?.[0];
  const genreName = urlParams?.splice(1)?.join(" ");

  const [movies, setMovies] = useState<[Movie] | []>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const response = await getMoviesByGenre(genreId, page);
      if (response?.movies) {
        setMovies(response.movies.items);
        setIsLoading(false);
      }
    };

    getMovies();
  }, [slug]);

  return (
    <Layout>
      <section className="genre-list py-4">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <Loader type="icon" />
              <p className="text-center text-light mt-4 m-0">
                Loading content...
              </p>
            </div>
          ) : movies?.length ? (
            <>
              <Link
                to={"/back"}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
                className="text-light text-decoration-none"
              >
                <i className="bi bi-arrow-left me-2"></i>
                <span>Back</span>
              </Link>

              <h3 className="text-light mt-3 mb-3">{genreName}</h3>

              <div className="row align-items-stretch">
                {movies?.map((movie: Movie) => (
                  <div
                    className="col col-6 col-md-4 col-lg-3 mb-4"
                    key={movie.original_title}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <NoContent />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GenrePage;
