import React from "react";
import "./appHeader.scss";
import logo from "../../resources/logo.png";
import { Link, NavLink } from "react-router-dom";
const AppHeader = () => {
  return (
    <header className="appHeader">
      <nav className="appHeader-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="genshin logo" width="100" height="80" />
        </Link>
        <ul className="site-navigation">
          <li className="site-navigation-item active">
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#45c8ff" : "inherit",
              })}
              to="/"
            >
              Персонажи
            </NavLink>
          </li>
          <li className="site-navigation-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#45c8ff" : "inherit",
              })}
              to="/artifacts"
            >
              Артефакты
            </NavLink>
          </li>
          <li className="site-navigation-item">
            <a href="./promocodes.html">Промокоды</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
