import logo from '../../assets/images/logo.png'
import './NavBar.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className='area-logo'>
                        <a className="navbar-brand" href="#"><img src={logo} className="logo" /></a>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buscar</a>
                            </li>
                        </ul>
                        <button className="btn btn-primary me-2">SOU UMA ONG</button>
                        <button className="btn btn-danger">QUERO DOAR</button>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default NavBar;