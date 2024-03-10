import { Link } from "react-router-dom";
import { signOut } from "../../firebase/utils";
import Navbar from "../Navbar";
import { APP } from "../../utils/constants";

const Header = () => {
  return (
    <header className="bg-dark py-3 position-relative">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col col-4 col-md-3 col-lg-2 col-xl-1">
            <Link to="/home">
              <img src="/images/jedi-logo.png" alt={APP.NAME} height={40} />
            </Link>
          </div>
          <div className="col col-4 col-md-7 col-xl-8">
            <Navbar theme="light" />
          </div>
          <div className="col col-3 col-md-2 col-xl-1 text-end">
            <button className="btn btn-sm btn-danger" onClick={() => signOut()}>
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
