import React from "react";
import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'nav-link pl-0 nav-item-active' : 'nav-link pl-0')} to={"/category/aventuras"} >
                Aventuras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'nav-link pl-0 nav-item-active' : 'nav-link pl-0')} to={"/category/ciudades"}>
                Ciudades
              </NavLink>
            </li>
          </ul>
        </div>
  );
};

export default NavBarMenu;
