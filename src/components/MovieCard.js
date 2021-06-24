// import { useState,useEffect } from "react";
import Movies from './Movies';
import './movieCard.css';

export default function MovieCard ({movieName}) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     //eslint-disable-next-line
    //     fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=3c10748e`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         setIsLoaded(true);
    //         setItems(result);
    //         },
            
    //         (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //         }
    //     )
    // })

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //     <div className="card" style={{width: 200}}>
    //         <img src={items.Poster} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h4 className="card-title">{items.Title}</h4>
    //           <h5 className="card-title">Rating : {items.imdbRating}</h5>
    //           <p className="card-text">{items.Plot}</p>
    //         </div>
    //     </div>
    //     );
    // }
    const items = Movies(movieName);
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        return (
        <div className="card" style={{width: 200}}>
            <img src={items.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{items.Title}</h4>
              <h5 className="card-title">Rating : {items.imdbRating}</h5>
              <p className="card-text">{items.Plot}</p>
            </div>
        </div>
        );
}