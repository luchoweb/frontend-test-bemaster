import { Link, useNavigate } from "react-router-dom";

const NoContent = () => {
  const navigate = useNavigate();

  return (
    <div className="no-content text-center py-5">
      <picture className="yoda">
        <img src="/images/Yoda.webp" alt="Yoda Master" height={250} />
      </picture>

      <h3 className="mt-4 mb-0 text-light">No content available</h3>

      <p className="m-0 text-light">
        <em>"If a movie you want, move to another category you must." -Yoda</em>
      </p>

      <Link
        to={"/back"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="btn btn-outline-light mt-4"
      >
        <i className="bi bi-arrow-left me-2"></i>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default NoContent;
