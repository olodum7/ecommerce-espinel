import React from "react";
import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/"}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/category/destacados"}>
                Destacados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/category/aventuras"}>
                Aventuras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/category/ciudades"}>
                Ciudades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={"/contacto"}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMenu;
