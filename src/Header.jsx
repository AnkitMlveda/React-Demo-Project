import { NavLink } from "react-router-dom";
import "./Custom.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "./Usercontext";

export default function Header() {
  const location = useLocation().pathname;
  const [user, setUser] = useContext(Usercontext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <NavLink className="navbar-brand" to="/">
          Movies
        </NavLink>
        {user && <p className="navbar-brand">Welcome, {user.user.name}</p>}
      </nav>
      {location === "/" ? (
        <div>
          <h1>Welcome to The site</h1>
          <p className="text-muted">
            If you have already register please click on the login Button
            <NavLink className="nav-link custom" to="/login" end>
              Login
            </NavLink>
          </p>
          <p className="text-muted">
            If you have Not register please click on the Signup Button
            <NavLink className="nav-link custom" to="/signup">
              Signup
            </NavLink>
          </p>
        </div>
      ) : null}
    </div>
  );
}
