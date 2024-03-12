import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../services/api-movies";
import { Movie } from "../../types";

import Layout from "./layout";
import { Loader, MovieCompanies, MovieHero, MovieInfo } from "../../components";

const MoviePage = () => {
  const { slug } = useParams();
  const params = slug?.split("-");

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
          <Loader />
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

                    <MovieInfo movie={movie} />
                  </div>
                </div>
              </div>
            </section>

            <MovieCompanies companies={movie.production_companies} />
          </>
        )
      )}
    </Layout>
  );
};

export default MoviePage;
