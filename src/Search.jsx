// import "./Custom.css";
// import MovieDetails from "./MovieDetails";
// import { useState } from "react";
// import { Movies } from "./Apicall";

// export default function Search() {
//   const [searchText, setSearchText] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [sort, setSort] = useState("genres");
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const searchMoviesResult = (e) => {
//     e.preventDefault();
//     Movies({
//       sort: sort,
//       sortOrder: sortOrder,
//       searchText: searchText,
//     }).then((res) => {
//       setIsLoading(false);
//       setMovies(res);
//     });
//   };

//   return (
//     <div className="container-fluid">
//       <div className="cus-search row">
//         <form
//           className="form-inline my-2 my-lg-0 row"
//           onSubmit={searchMoviesResult}
//         >
//           <input
//             className="form-control col mlform searchmargin"
//             type="number"
//             placeholder="Enter the limit"
//           />
//           <input
//             className="form-control col mlform"
//             type="number"
//             placeholder="Enter the page Number you want to skip"
//           />
//           <label className="col-auto cuslabel">Sort:</label>
//           <div className="col-sm-1">
//             <select
//               className="form-select"
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//             >
//               <option value="genres">genres</option>
//               <option value="cast">cast</option>
//               <option value="title">title</option>
//               <option value="year">year</option>
//               <option value="rating">rating</option>
//             </select>
//           </div>
//           <label className="col-auto cuslabel">SortOrder:</label>
//           <div className="col-auto">
//             <select
//               className="form-select"
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//             >
//               <option value="asc">Ascending</option>
//               <option value="desc">Descending</option>
//             </select>
//           </div>
//           <input
//             className="form-control col mlform searchmargin"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             className="btn btn-primary col-auto searchmargin"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//         {isLoading ? null : <MovieDetails movies={movies}/>}
//       </div>
//     </div>
//   );
// }
