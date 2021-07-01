import AsideBar from "../components/AsideBar";
import getMovie from '../components/services';
import { useState, useEffect } from "react";



export default function Details({match}){

    const [movie, setMovie] = useState(match.params.name);

    useEffect(() => {
        (async () => {
            setMovie( await getMovie(movie));
            return {...movie};
        })()
        
    // eslint-disable-next-line    
    },[]);

    return(
        <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AsideBar />
                        
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                            <div className='col-md-8'>
                                <p>
                                    {movie.Plot}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}