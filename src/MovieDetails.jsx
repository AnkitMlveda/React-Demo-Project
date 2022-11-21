export default function MovieDetails({ movies }) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-sm-3" key={movie._id}>
          <div className="card-deck">
            <div className="card">
              <img
                src={movie.poster}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">
                  <h6>Cast:</h6>
                  {movie.cast}
                </p>
                <p className="card-title">
                  <h6>Title: </h6>
                  {movie.title}
                </p>
                <p className="card-text">
                  <h6>Description:</h6>
                  {movie.fullplot}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
