import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Ingatlan</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/hirdetesek">Hirdetések</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/regisztracio">Regisztráció</Link>
          </li>
        </ul>
        <div className="ml-auto">
          <button className="btn btn-outline-secondary mr-2" onClick={() => changeLanguage('en')}>EN</button>
          <button className="btn btn-outline-secondary" onClick={() => changeLanguage('hu')}>HU</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
