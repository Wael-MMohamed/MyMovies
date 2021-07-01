import { Link } from 'react-router-dom';
import './movieCard.css';

export default function MovieCard ({movieName}) {

        return (
          
            <div className="card" style={{width: 200}}>
              
              <img src={movieName.Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <Link to={`/details/${movieName.Title}`}>
                <h4 className="card-title">{movieName.Title}</h4>
                </Link>
                <h5 className="card-title">Rating : {movieName.imdbRating}</h5>
                <p className="card-text">{movieName.Plot}</p>
              </div>
              
            </div>
          
        
        );
}