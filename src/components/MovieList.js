import MovieCard from './MovieCard';
import './movielist.css';

export default function MovieList(){
    const topMovies = ['Hitman\'s Wife\'s Bodyguard','A Quiet Place Part II','	Cruella','	In the Heights','Wrath of Man','Spirit Untamed','Nobody','Those Who Wish Me Dead'];
    return(
        <div className="wrapper">
                {topMovies.map((item) => (
                    <MovieCard key={item} movieName={item} />
                ))}
        </div>
    );
}