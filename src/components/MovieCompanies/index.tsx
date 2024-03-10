import { Company } from "../../types";
import { APP } from "../../utils/constants";

interface Props {
  companies: [Company];
}

const MovieCompanies = ({ companies }: Props) => {
  const { BASE_URL_MOVIE_IMAGES: imageBaseUrl } = APP;

  return (
    <section className="bg-light movie-companies pb-4">
      <div className="container">
        <h4 className="mb-4">Production Companies</h4>

        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {companies.map((company: Company) => (
            <div
              className="col-6 col-md-4 col-lg-2 mb-4"
              key={company.id}
            >
              {company.logo_path ? (
                <picture className="company-logo mb-3 d-block w-100 text-center text-lg-start" title={company.name}>
                  <img
                    src={`${imageBaseUrl}${company.logo_path}`}
                    alt={company.name}
                    className="w-50"
                  />
                </picture>
              ) : (
                <p className="m-0 text-center text-lg-start">{company.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieCompanies;
