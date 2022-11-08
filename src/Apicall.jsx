import axios from "axios";

const movieAxios = axios.create({
  baseURL: "http://34.208.44.89:3006",
});

let token = "";

export const newUser = ({ name, email, password, age }) =>
  movieAxios
    .post("/auth/signup", { name, email, password, age })
    .then((res) => res.data);

export const userLogin = ({ username, password }) =>
  movieAxios.post("/auth/login", { username, password }).then((res) => {
    token = res.data.token;
    return res.data;
  });

export const CurrentUser = () =>
  movieAxios
    .get("/user/currentuser", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const Movies = () =>
  movieAxios
    .get("/movies", {
      headers: { Authorization: `Bearer ${token}` },
      params:{
        sort: "cast",
        sortOrder: "asc",
      }
    })
    .then((res) => res.data);

export default movieAxios;
