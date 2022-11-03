import { NavLink } from "react-router-dom";
import "./Custom.css";
//import { CurrentUser } from '../Apicall';
import { useLocation } from "react-router-dom";

export default function Header() {
  // const member = CurrentUser();
  const  location  = useLocation().pathname;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <NavLink className="navbar-brand" to="/">
          Movies
        </NavLink>
        {/* <div className="collapse navbar-collapse">
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
        </div> */}
      </nav>
      {location === '/' ?
      <div>
        <marquee width="60%" direction="right" height="100px">
          <h1>Welcome to The site</h1>
        </marquee>
        <p className="text-muted">If you have already register please click on the login Button
        <NavLink className="nav-link custom" to="/login" end>
                  Login
        </NavLink>
        </p>
        <p className="text-muted">If you have Not register please click on the Signup Button
        <NavLink className="nav-link custom" to="/signup">
                  Signup
        </NavLink>
        </p>
      </div>
      :null }
      </div>
  );
}
