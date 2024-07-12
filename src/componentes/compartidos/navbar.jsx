import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Logo from '../Imagenes/CapLogo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={Logo} alt="CapLogo" />
        </Link>
        <div className={`navbar-burger burger ${showMenu ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/" style={{ color: 'black' }}>
            Inicio
          </Link>
          <Link className="navbar-item" to="/about" style={{ color: 'black' }}>
            Acerca de
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="#" style={{ color: 'black' }}>
              Coleccion
            </Link>
            <div className="navbar-dropdown is-boxed" style={{ backgroundColor: 'white' }}>
              <Link className="navbar-item" to="/categoria/tecnologia" style={{ color: 'black', backgroundColor: 'white' }}>
                Tecnología
              </Link>
              <Link className="navbar-item" to="/categoria/noticias" style={{ color: 'black', backgroundColor: 'white' }}>
                Noticias
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="#" style={{ color: 'black' }}>
              Categorías 
            </Link>
            <div className="navbar-dropdown is-boxed" style={{ backgroundColor: 'white' }}>
              <Link className="navbar-item" to="/categoria/ciencia" style={{ color: 'black', backgroundColor: 'white' }}>
                Ciencia (CBS)
              </Link>
              <Link className="navbar-item" to="/categoria/ingenieria" style={{ color: 'black', backgroundColor: 'white' }}>
                Ciencia (CI)
              </Link>
              <Link className="navbar-item" to="/categoria/computacion" style={{ color: 'black', backgroundColor: 'white' }}>
               Ciencia (CCCEF) 
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/revistas" style={{ color: 'black' }}>
            Revistas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
