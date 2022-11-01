import { Route, Routes } from "react-router-dom";
import  Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="*" element={<h2>Not Found!</h2>} /> */}
    </Routes>
  );
}