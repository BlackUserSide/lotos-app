import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import user from "../../img/user.png";
import "./header.sass";
import "../../libs/hamburgers/dist/hamburgers.css";
import { useState } from "react";
import { PopUpLogin } from "../../ui/PopUpLogin/PopUpLogin";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);
  const activeHandler = () => {
    if (activeMenu) {
      setActiveMenu(false);
      return;
    }
    setActiveMenu(true);
  };
  const popHandler = () => {
    if (popUp) {
      setPopUp(false);
      return;
    }
    setPopUp(true);
  };
  return (
    <>
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
              <div className="main-auth-link" onClick={popHandler}>
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
      <header className="mobile-header">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="mobile-nav">
          <div
            className={`hamburger hamburger--3dx ${
              activeMenu ? "is-active" : ""
            }`}
            onClick={activeHandler}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
          <nav className={`hidden-menu ${activeMenu ? "active-menu" : ""}`}>
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
                <div className="main-auth-link" onClick={popHandler}>
                  <img src={user} alt="user-ico" />
                  <p>Войти</p>
                </div>
              </li>
              <li className="main-link">
                <div className="change-lang-wrapper">
                  <p>RU</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {popUp ? <PopUpLogin /> : ""}
    </>
  );
};
