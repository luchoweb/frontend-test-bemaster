import { useEffect, useState } from "react";
import { getCategories } from "../../services/api-movies";
import { Genre } from "../../types";

import { GenreCard, HomeHero, Loader } from "../../components";
import Layout from "./layout";

const HomePage = () => {
  const [genres, setGenres] = useState<[Genre] | []>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    <Layout classesName="movie-page">
      <HomeHero />
      <div className="container">
        <section className="home-categories py-5">
          {isLoading ? (
            <div className="text-center text-light py-5">
              <Loader />
              <p className="mt-3">Loading categories...</p>
            </div>
          ) : !isLoading && genres?.length ? (
            <>
              <h5 className="m-0 mb-4 text-light">Featured Categories</h5>

              <div className="row align-items-stretch">
                {genres.map((genre: Genre, index: number) => {
                  if (index < 8) {
                    return (
                      <div
                        className="col col-6 col-md-4 col-lg-3 mb-4"
                        key={genre.id}
                      >
                        <GenreCard genre={genre} />
                      </div>
                    );
                  }
                })}
              </div>
            </>
          ) : (
            <div className="container text-center text-light py-5">
              <p className="my-4">
                Categories not available. Please reload the page.
              </p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
