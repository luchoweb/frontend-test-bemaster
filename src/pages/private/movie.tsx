import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../services/api-movies";
import { Company, Movie } from "../../types";
import { getMovieYear } from "../../utils/dates";
import { formatCurrency } from "../../utils/format";
import { APP } from "../../utils/constants";

import Layout from "./layout";
import { Loader, MovieHero } from "../../components";

const MoviePage = () => {
  const { slug } = useParams();
  const params = slug?.split("-");

  const { BASE_URL_MOVIE_IMAGES: imageBaseUrl } = APP;

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
  }, []);

  return (
    <Layout classesName="movie-page">
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
                <div className="row">
                  <div className="col-12 col-md-7 col-lg-8 mb-4">
                    <h3 className="mb-4">Overview</h3>
                    <p className="m-0">{movie.overview}</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-4">
                    <h5 className="mb-3">More information</h5>

                    <ul className="movie-more-info">
                      <li>
                        <p className="m-0">
                          <strong>Rating</strong>:{" "}
                          <span>{movie.vote_average.toFixed(1)} ({movie.vote_count} votes)</span>
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          <strong>Release date</strong>:{" "}
                          {getMovieYear(movie.release_date)}
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          <strong>Budget</strong>:{" "}
                          {formatCurrency(movie.budget)}
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          <strong>Revenue</strong>:{" "}
                          {formatCurrency(movie.revenue)}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>                
              </div>
            </section>

            <section className="bg-light movie-companies pb-4">
              <div className="container">
                <h4 className="mb-4">Production Companies</h4>

                <div className="row align-items-center">
                  {movie.production_companies?.map((company: Company) => (
                    <div className="col-4 col-md-3 col-lg-2 mb-4 text-center text-md-start" key={company.id}>
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
