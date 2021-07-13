import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import user from "../../img/user.png";
import "./header.sass";
export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <nav className="main-nav">
        <ul className="nav-bar">
          <li className="main-link">
            <Link to="/">Главная</Link>
          </li>
          <li className="main-link">
            <Link to="/products">Продукты</Link>
          </li>
          <li className="main-link">
            <Link to="/leader">Руководитель</Link>
          </li>
          <li className="main-link">
            <div className="main-auth-link">
              <img src={user} alt="user-ico" />
            </div>
          </li>
          <li className="main-link">
            <div className="change-lang-wrapper">
              <p>RU</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
