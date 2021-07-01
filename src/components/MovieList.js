import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import getMovie from './services';
import './movielist.css';
const topMovies = ['Hitman\'s Wife\'s Bodyguard','A Quiet Place Part II','	Cruella','	In the Heights','Wrath of Man','Spirit Untamed','Nobody','Those Who Wish Me Dead'];

export default function MovieList({newMovie}){
    const [movies, setMovies] = useState(topMovies);
    const [data, setData] = useState([]);
    
    
    let temp = [];

    useEffect(() =>{
        if(newMovie !== ''){
            topMovies.push(newMovie);
            setMovies(topMovies);
            return {...movies};
        }
    },[newMovie,movies])

    useEffect(() => {
        (async () => {
            // eslint-disable-next-line
            temp =  movies.map(item => getMovie(item));
            // eslint-disable-next-line
            temp = await Promise.all(temp);
            setData(temp);
            return {...data};
        })()
        
        
    },[movies,newMovie]);
    
    return(
        <div className="wrapper">
                {
                data.map((item) => (
                    <MovieCard key={item.Title} movieName={item} />
                ))
                }
        </div>
    );
}