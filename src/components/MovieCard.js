// import { useState,useEffect } from "react";
import './movieCard.css';

export default function MovieCard ({movieName}) {


    // const movieName = Movies(movieName);
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        return (
        <div className="card" style={{width: 200}}>
            <img src={movieName.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{movieName.Title}</h4>
              <h5 className="card-title">Rating : {movieName.imdbRating}</h5>
              <p className="card-text">{movieName.Plot}</p>
            </div>
        </div>
        );
}