import { useEffect, useState } from "react";
import { getCategories } from "../../services/api-movies";
import { Genre } from "../../types/movies";

import { CategoryCard, HomeHero } from "../../components";
import Layout from "./layout";

const HomePage = () => {
  const [genres, setGenres] = useState<[Genre] | []>();

  useEffect(() => {
    const getGenres = async () => {
      const response = await getCategories();
      if(response?.genres) {
        setGenres(response.genres.genres);
      }
    };

    getGenres();
  }, [genres]);

  return (
    <Layout>
      <HomeHero />

      <div className="container">
        <section className="home-categories py-5">
          <h5 className="m-0 mb-4 text-light">Featured categories</h5>

          <div className="row align-items-center">
          {genres?.map((genre: Genre, index: number) => {
            if(index < 8) {
              return (
                <div className="col col-6 col-md-4 col-lg-3 mb-4" key={genre.id}>
                  <CategoryCard category={genre} key={genre.name} />
                </div>
              );
            }
          })}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
