import { Link } from "react-router-dom";

import { Movie } from "../../types/movies";
import { getMovieYear } from "../../utils/dates";

import "./style.scss";

interface Props {
  movie: Movie | undefined;
}

const MovieHero = ({ movie }: Props) => {
  const {
    VITE_MOVIES_BASE_URL_POSTER: posterBaseUrl,
    VITE_MOVIES_BASE_URL_BG: bgBaseUrl,
  } = import.meta.env;

  return (
    movie && (
      <section
        className="movie py-5"
        style={{
          backgroundImage: `url(${bgBaseUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="movie-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-12 col-md-5 col-lg-4 col-xl-3 mb-4 mb-md-0">
              <picture className="movie-poster">
                <img
                  className="w-100"
                  src={`${posterBaseUrl}${movie.poster_path}`}
                  alt={`${movie.original_title} Poster`}
                />
              </picture>
            </div>

            <div className="col col-12 col-md-7 col-lg-8">
              <div className="movie-metadata mb-3">
                <h2 className="text-light mb-1">{movie.original_title}</h2>
                <h5 className="fw-normal m-0 text-light">{movie.tagline}</h5>
              </div>

              <ul className="movie-genders text-light d-flex p-0 m-0 mb-4 gap-4">
                {movie.genres &&
                  movie.genres.map((gender) => (
                    <li key={gender.name}>
                      <Link
                        to={`/category/${gender.id}`}
                        className="text-decoration-none text-light me-2"
                      >
                        {gender.name}
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="movie-buttons d-flex gap-4 align-items-center mb-4">
                <button className="btn btn-light py-2 px-4">
                  <i className="bi bi-play me-2"></i>
                  <span>Play Now</span>
                </button>

                <button className="btn btn-lg p-0" title="Add to Favorites">
                  <i className="bi bi-bookmark text-light"></i>
                </button>

                <button className="btn btn-lg p-0" title="Watch later">
                  <i className="bi bi-clock text-light"></i>
                </button>
              </div>

              <div className="movie-more-info d-flex align-items-center gap-4">
                <p className="m-0 text-light">
                  <strong>Release date</strong>:{" "}
                  {getMovieYear(movie.release_date)}
                </p>

                <p className="m-0 text-light">
                  <strong>Duration</strong>:{" "}
                  {(movie.runtime / 60).toFixed(0)}h{" "}
                  {(movie.runtime / 60).toFixed(2).split(".")[1]}m
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default MovieHero;
