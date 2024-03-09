import Navbar from "../Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-4">logo</div>
          <div className="col col-4">
            <Navbar />
          </div>
          <div className="col col-4">
            <button className="btn btn-sm btn-danger">
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
