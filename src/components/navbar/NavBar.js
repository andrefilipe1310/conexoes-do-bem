import logo from "../../assets/images/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="area-logo">
            <a className="navbar-brand" href="#">
              <img src={logo} className="logo" />
            </a>
          </div>
          <div className="area-navbar ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav me-auto list-unstyled ">
                <li className="nav-item ms-5">
                  <a className="nav-link" href="#">
                    Início
                  </a>
                </li>
                <li class="nav-item dropdown ms-5">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="">Animales</a>
                  <a class="dropdown-item" href="">PRobes</a>
                  
                </div>
              </li>
                <li className="nav-item ms-4">
                  <button className="btn btn-cadastro ms-2">
                    CADASTRE SUA ONG
                  </button>
                </li>
                <li className="nav-item ms-4">
                  <button className="btn btn-login">Login</button>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
