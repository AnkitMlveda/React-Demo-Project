import { Navigate, Route, Routes } from "react-router-dom";
import  Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Movie from "./Pages/Movie";
import { useContext } from "react";
import { Usercontext } from "./Usercontext";

export default function Router() {
  const [user, setUser] = useContext(Usercontext);

  return (
    <Routes>
      <Route path="/movie" element={ user ? <Movie /> : <Navigate to="/login"/> } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="*" element={<h2>Not Found!</h2>} /> */}
    </Routes>
  );
}