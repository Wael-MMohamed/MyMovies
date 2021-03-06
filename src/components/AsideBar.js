export default function AsideBar (){
    return(
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
    )
}