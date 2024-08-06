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
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" onClick={(e) => e.preventDefault()} style={{ color: 'black' }}>
              Categorías
            </a>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/categoria/ciencia">
                Ciencia (CBS)
              </Link>
              <Link className="navbar-item" to="/categoria/ingenieria">
                Ingeniería (CI)
              </Link>
              <Link className="navbar-item" to="/categoria/computacion">
                Computación (CCCEF)
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" onClick={(e) => e.preventDefault()} style={{ color: 'black' }}>
              Colección
            </a>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/categoria/tecnologia">
                Tecnología
              </Link>
              <Link className="navbar-item" to="/categoria/noticias">
                Noticias
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/revistas" style={{ color: 'black' }}>
            Revistas
          </Link>
          <Link className="navbar-item" to="/about" style={{ color: 'black' }}>
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;