import { Route, Routes } from "react-router-dom";
import  Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Movie from "./Pages/Movie";

export default function Router() {
  return (
    <Routes>
      <Route path="/movie" element={<Movie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="*" element={<h2>Not Found!</h2>} /> */}
    </Routes>
  );
}