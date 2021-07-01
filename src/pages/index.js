import AsideBar from '../components/AsideBar';
import MovieList from '../components/MovieList';


export default function Landing({newMovie}){
    return(
        <div>
            <div className='container'>
                    {/* <NavBars /> */}
                <div className='row'>
                    <div className='col-md-3'>
                        <AsideBar />
                    </div>
                    <div className='col-md-9'>
                        <MovieList newMovie={newMovie}/>
                    </div>
                </div>
            </div>

        </div>
    )
}