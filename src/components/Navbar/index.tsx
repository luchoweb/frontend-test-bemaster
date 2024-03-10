import { Link } from "react-router-dom";

import links from "../../mocks/main-menu.json";

interface Props {
  theme?: string;
}

const Navbar = ({ theme }: Props) => {
  return (
    <nav className={`navbar ${theme}`}>
      <ul className="menu list-unstyled m-0 p-0 d-flex align-items.center gap-4">
        {links.map((link) => (
          <li className="menu-item" key={`item-${link.href}`}>
            <Link to={link.href} className={`menu-link text-${theme} text-decoration-none`}>
              <i className={`bi bi-${link.icon} me-2`}></i>
              <span className="d-none d-md-inline-block">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
