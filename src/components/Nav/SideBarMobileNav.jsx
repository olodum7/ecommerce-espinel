import React from "react";
import SocialIconsBar from "../SocialIconsBar/SocialIconsBar";
import { NavLink } from "react-router-dom";

const SideBarMobileNav = () => {
  return (
    <nav id="sidebar" className="text-left">
      <div className="sidebar-header">
        <div className="container">
          <div className="row align-items-center">
 
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/aventuras"}>
            Aventuras
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/ciudades"}>
            Ciudades
          </NavLink>
        </li>
      </ul>

      <SocialIconsBar />
    </nav>
  );
};

export default SideBarMobileNav;
