import { NavLink,Navigate } from "react-router-dom";
import "./Custom.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "./Usercontext";
import Gravatar from "react-gravatar";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Header() {
  const location = useLocation().pathname;
  const [user, setUser] = useContext(Usercontext);

  return (
    <div>
      <ErrorBoundary fallback={<Navigate to="/" />}>
        <Suspense fallback={<p>loding....</p>}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <NavLink className="navbar-brand" to="/">
              Movies
            </NavLink>
            {/* {user && <p className="navbar-brand">Welcome, {user.user.name}
        <NavLink className="nav-link custom1" to="/">
              Logout
        </NavLink></p>} */}
            <Gravatar
              style={{ width: "2rem", height: "2rem" }}
              title={user?.user.name}
              email={user?.user.email}
              className="logintext"
            />
          </nav>
        </Suspense>
      </ErrorBoundary>
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
