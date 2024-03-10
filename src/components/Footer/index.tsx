import { APP } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-dark py-2">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="text-light m-0">{APP.NAME}</p>
          </div>
          <div className="col-6">
            <p className="m-0 text-light text-end">
              <small>
                Made with <i className="bi bi-heart"></i> by Lucho Web
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
