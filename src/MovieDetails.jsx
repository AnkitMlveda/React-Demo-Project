export default function MovieDetails({ movies }) {
  return (
    <div className="row">
      { movies.map( (movie)=> 
      <div className="col-sm-3" key={movie._id}>
        <div className="card-deck">
          <div className="card">
            <img src={movie.poster} alt={movie.title} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {movie.fullplot}
              </p>
            </div>
          </div>
        </div>
        </div>
        )}
      </div>
  );
}
