import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../services/api-movies";
import { Company, Movie } from "../../types";

import Layout from "./layout";
import { Loader, MovieHero } from "../../components";

const MoviePage = () => {
  const { slug } = useParams();
  const params = slug?.split("-");

  const { VITE_MOVIES_BASE_URL_LOGO: imageBaseUrl } = import.meta.env;

  const [movie, setMovie] = useState<Movie | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      const response = await getMovieInfo(params?.[0]);
      if (response?.movie) {
        setMovie(response.movie);
        setIsLoading(false);
      }
    };

    getMovie();
  }, [slug]);

  console.log(movie);

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center py-5">
          <Loader type="icon" />
          <p className="text-center text-light mt-4 m-0">Loading content...</p>
        </div>
      ) : (
        movie && (
          <>
            <MovieHero movie={movie} />

            <section className="bg-light movie-overview pt-4 pb-5">
              <div className="container">
                <h3 className="mb-4">Overview</h3>
                <p className="m-0">{movie.overview}</p>
              </div>
            </section>

            <section className="bg-light movie-companies pb-4">
              <div className="container">
                <h4 className="mb-4">Production Companies</h4>

                <div className="row align-items-center">
                  {movie.production_companies?.map((company: Company) => (
                    <div className="col-4 col-md-3 col-lg-2 mb-4 text-center text-md-start">
                      {company.logo_path ? (
                        <picture className="company-logo mb-3 d-block">
                          <img
                            src={`${imageBaseUrl}${company.logo_path}`}
                            alt={company.name}
                            className="w-50"
                          />
                        </picture>
                      ) : (
                        <p className="m-0">{company.name}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )
      )}
    </Layout>
  );
};

export default MoviePage;
