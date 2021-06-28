import './App.css';
import MovieList from './components/MovieList';
import {useState} from 'react';


function App() {
  // const topMovies = ['Hitman\'s Wife\'s Bodyguard','A Quiet Place Part II','	Cruella','	In the Heights','Wrath of Man','Spirit Untamed','Nobody','Those Who Wish Me Dead'];
  // const [movies, setMovies] = useState(topMovies);
  const [search, setSearch] = useState(null);
  const addMovie = () => {
    // const name = Movie(search).Title;
    // topMovies.push(name);
    // setMovies(topMovies);
    // return topMovies;
  }

  return (
    <div className="container">
      <div className='row'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className="container-fluid">
            <a className="navbar-brand" href="www.google.com">My Movies</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="www.google.comnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="www.google.com">Action</a></li>
                    <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="www.google.com" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                {/* <input className="form-control me-2" type="text" placeholder="Search" value={search} 
                  onChange={(e) => setSearch((prev) =>{
                                                          prev = e.target.value;
                                                          return prev;
                                                          })
                          }
                /> */}
                <button className="btn btn-outline-success" type="submit" onClick={() =>addMovie()}>Add</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='row'>
        <div className='col-md-3'>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
    <a href="www.google.com" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="www.google.com" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="www.google.com" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="www.google.com" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="www.google.com" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="www.google.com" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="www.google.com" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="..." width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="www.google.com">New project...</a></li>
        <li><a className="dropdown-item" href="www.google.com">Settings</a></li>
        <li><a className="dropdown-item" href="www.google.com">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="www.google.com">Sign out</a></li>
      </ul>
    </div>
  </div>
        </div>
        <div className='col-md-9'>
          <MovieList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
