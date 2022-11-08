import "./Custom.css";

export default function Search() {
  return (
    <div className="container-fluid">
      <div className="cus-search row">
        <form className="form-inline my-2 my-lg-0 row">
          <input
            className="form-control col mlform searchmargin"
            type="text"
            placeholder="Enter the limit"
          />
          <label className="col-auto cuslabel">Sort:</label>
          <div className="col-sm-1">
            <select className="form-select">
              <option value="genres">genres</option>
              <option value="cast">cast</option>
              <option value="title">title</option>
              <option value="year">year</option>
              <option value="rating">rating</option>
            </select>
          </div>
          <label className="col-auto cuslabel">SortOrder:</label>
          <div className="col-auto">
            <select className="form-select">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <input
            className="form-control col mlform searchmargin"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-primary col-auto searchmargin"
            type="submit"
          >
            Search
          </button>
          <input
            className="form-control col mlform"
            type="text"
            placeholder="Enter the page Number you want to skip"
          />
        </form>
      </div>
    </div>
  );
}
