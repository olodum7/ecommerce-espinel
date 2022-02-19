import React from "react";
import LogInButton from "../UI/LogInButton";
import SocialIconsBar from "../SocialIconsBar/SocialIconsBar";
import { NavLink } from "react-router-dom";

const SideBarMobileNav = () => {
  return (
    <nav id="sidebar" className="text-left">
      <div className="sidebar-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 pl-0">
              <LogInButton />
            </div>

            <div className="col-2 text-left">
              <button
                type="button"
                id="sidebarCollapseX"
                className="btn btn-link"
              >
                <i className="bx bx-x icon-single"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-unstyled components links">
        <li className="active">
          <NavLink to={"/"}>
            <i className="bx bx-home mr-3"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/destacados"}>
            <i className="bx bx-carousel mr-3"></i> Destacados
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/aventuras"}>
            <i className="bx bx-book-open mr-3"></i> Aventuras
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/ciudades"}>
            <i className="bx bx-crown mr-3"></i> Ciudades
          </NavLink>
        </li>
        <li>
          <a
            href="pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="bx bx-help-circle mr-3"></i>
            Categoría #3
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href=" ">Subcategoría #1</a>
            </li>
            <li>
              <a href=" ">Subcategoría #2</a>
            </li>
            <li>
              <a href=" ">Subcategoría #3</a>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={"/contacto"}>
            <i className="bx bx-phone mr-3"></i> Contacto
          </NavLink>
        </li>
      </ul>

      <h6 className="text-uppercase mb-1">Categories</h6>
      <ul className="list-unstyled components mb-3">
        <li>
          <a href=" ">Category 1</a>
        </li>
        <li>
          <a href=" ">Category 1</a>
        </li>
        <li>
          <a href=" ">Category 1</a>
        </li>
        <li>
          <a href=" ">Category 1</a>
        </li>
        <li>
          <a href=" ">Category 1</a>
        </li>
        <li>
          <a href=" ">Category 1</a>
        </li>
      </ul>

      <SocialIconsBar />
    </nav>
  );
};

export default SideBarMobileNav;
