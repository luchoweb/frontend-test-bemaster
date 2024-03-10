import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../services/api-movies";
import { Genre } from "../../types";

import { GenreCard, Loader, NoContent } from "../../components";
import Layout from "./layout";

const GenresPage = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState<[Genre] | []>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGenres = async () => {
      const response = await getCategories();
      if (response?.genres) {
        setGenres(response.genres.genres);
        setIsLoading(false);
      }
    };

    getGenres();
  }, []);

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
          ) : !isLoading && genres?.length ? (
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

              <h3 className="text-light mt-3 mb-3">Genres</h3>

              <div className="row align-items-stretch">
                {genres?.map((genre: Genre) => (
                  <div
                    className="col col-6 col-md-4 col-lg-3 mb-4"
                    key={genre.id}
                  >
                    <GenreCard genre={genre} />
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

export default GenresPage;
