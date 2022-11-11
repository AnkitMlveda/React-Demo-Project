//import Search from "../Search";
import { useQuery } from "@tanstack/react-query";
import "../Custom.css";
import { useState } from "react";
import { Movies } from "../Apicall";
import MovieDetails from "../MovieDetails";

export default function Movie() {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sort, setSort] = useState("genres");
  const [limit, setlimit] = useState("10");
  const [skipData, setSkipdata] = useState("0");
  const [filters, setFilters] = useState({ searchText, sortOrder, sort, limit, skipData });
  const { data: movies } = useQuery(["movie", filters], Movies, {
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: true,
    staleTime: Infinity,
  });
  const searchMoviesResult = (e) => {
    e.preventDefault();
    setFilters({ searchText, sortOrder, sort, limit, skipData });
  };

  return (
    <div>
      {/* <Search/> */}
      <div className="container-fluid">
        <div className="cus-search row">
          <form
            className="form-inline my-2 my-lg-0 row"
            onSubmit={searchMoviesResult}
          >
            <input
              className="form-control col mlform searchmargin"
              type="number"
              placeholder="limit"
              value={limit}
              onChange={(e) => setlimit(e.target.value)}
            />
            <input
              className="form-control col mlform"
              type="number"
              placeholder="skip"
              value={skipData}
              onChange={(e) => setSkipdata(e.target.value)}
            />
            <label className="col-auto cuslabel">Sort:</label>
            <div className="col-sm-1">
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="genres">genres</option>
                <option value="cast">cast</option>
                <option value="title">title</option>
                <option value="year">year</option>
                <option value="imdb.rating">rating</option>
              </select>
            </div>
            <label className="col-auto cuslabel">SortOrder:</label>
            <div className="col-auto">
              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <input
              className="form-control col mlform searchmargin"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn btn-primary col-auto searchmargin"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <MovieDetails movies={movies} />
    </div>
  );
}
