import axios from "axios";

const movieAxios = axios.create({
  baseURL: "http://34.208.44.89:3006",
});

export const newUser = ({ name, email, password, age }) =>
  movieAxios
    .post("/auth/signup", { name, email, password, age })
    .then((res) => res.data);

export const userLogin = ({ username, password }) =>
  movieAxios
    .post("/auth/login", { username, password })
    .then((res) => res.data);

export const CurrentUser = () => 
  movieAxios.get("/user/currentuser").then((res) => res.data);

export default movieAxios;
