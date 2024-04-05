import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom'
import "./NavBar.css";

const NavBar = () => (
  <div className="nav-bar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Logo />
        <ToggleNavButton />
        <NavBarMenu />
      </div>
    </nav>
  </div>
);

const Logo = () => (
  <div className="area-logo">
    <Link className="navbar-brand" to='/'><img src={logo} className="logo" alt="Logo" /></Link>
  </div>
);

const ToggleNavButton = () => (
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
);

const NavBarMenu = () => (
  <div className="area-navbar ">
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav me-auto list-unstyled ">
        <NavItem title="Início" />
        <NavDropdown title="Categorias" items={["Animais", "Saúde infantil","Educação infantil"]} />
        <NavItemButton title="CADASTRE SUA ONG" link="/cadastro" className="ms-2" />
        <NavItemButton title="Login" link="/login" className="ms-2" />
      </ul>
    </div>
  </div>
);

const NavItem = ({ title }) => (
  <li className="nav-item ms-5">
    <a className="nav-link" href="#">
      {title}
    </a>
  </li>
);

const NavItemButton = ({ title, className,link }) => (
  <li className={`nav-item ms-4 ${className}`}>
    <Link to={link}><button className="btn btn-primary">{title}</button></Link>
    
  </li>
);

const NavDropdown = ({ title, items }) => (
  <li className="nav-item dropdown ms-5">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {title}
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      {items.map((item, index) => (
        <a key={index} className="dropdown-item" href="#">
          {item}
        </a>
      ))}
    </div>
  </li>
);

export default NavBar;
