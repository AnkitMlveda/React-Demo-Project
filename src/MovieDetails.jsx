import { useQuery } from "@tanstack/react-query";
import { Movies } from "./Apicall";

export default function MovieDetails() {

    const { data } = useQuery(["movie"],Movies,{
    suspense:true,
    useErrorBoundary:true,
    }
    );
    
    console.log(data);

  return (
    <div className="row">
      { data.map( (movie)=> 
      <div className="col-sm-3" key={movie._id}>
        <div className="card-deck">
          <div className="card">
            <img src={movie.poster} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {movie.fullplot}
              </p>
            </div>
          </div>
        </div>
        </div>
) 
       }
      </div>
  );
}
