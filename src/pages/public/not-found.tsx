import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="not-found py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 text-end">
            <img
              src="/images/Stormtrooper.png"
              alt="Stormtrooper"
              height={450}
            />
          </div>
          <div className="col-5 text-light">
            <h1 className="mb-4">This is not the page you're looking for!</h1>
            <h5 className="fw-normal mb-0">Move along...</h5>
            <h5 className="fw-normal m-0 mb-5">Move along...</h5>

            <Link to="/home" className="btn btn-light">
              <i className="bi bi-arrow-left me-2"></i>
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
