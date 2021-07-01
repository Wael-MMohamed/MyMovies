import { useState } from "react";
import { Link } from "react-router-dom";




export default function NavBars({handleClick,...props}){

  const [search, setSearch] = useState('');

  // function handleClick(e){
  //   e.preventDefault();
  //   props.setNewMovie(search);
  // }

  return(
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
              <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/Search'>Search</Link>
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
            <input className="form-control me-2" type="text" placeholder="Search" value={search} 
              onChange={(e) => setSearch((prev) =>{
                                                      prev = e.target.value;
                                                      props.name = prev;
                                                      return prev;
                                                      })
                      }
            />
            <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
        </div>
      </div>
    </nav>
  </div>
  )
    
}