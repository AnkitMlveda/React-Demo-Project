import { NavLink } from "react-router-dom";
import "./Custom.css";

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <NavLink className="navbar-brand" to="/">
          Movies
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" end>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}
