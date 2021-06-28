import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import getMovie from './services';
import './movielist.css';
const topMovies = ['Hitman\'s Wife\'s Bodyguard','A Quiet Place Part II','	Cruella','	In the Heights','Wrath of Man','Spirit Untamed','Nobody','Those Who Wish Me Dead'];

export default function MovieList(){
    const [data, setData] = useState([]);
    const [movies, setMovies] = useState(topMovies);
    
    let temp = [];

    useEffect(() => {
        (async () => {
            temp =  movies.map(item => getMovie(item));
        })()
        
        console.log('temp : ', temp);
        setData(temp);
    },[]);
    
    return(
        <div className="wrapper">
                {
                data.map((item) => (
                    <MovieCard key={item} movieName={item} />
                ))
                }
        </div>
    );
}