import React from "react";
import CartWidget from "../Cart/CartWidget";
import NavBarMenu from "./NavBarMenu";
import SideBarMobileNav from "./SideBarMobileNav";
import TopBar from "../TopBar/TopBar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="overlay"></div>

      <TopBar />

      <nav
        className="navbar navbar-expand-md navbar-light main-menu"
        style={{ boxShadow: "none" }}
      >
        <div className="container">

            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-link d-block d-md-none"
            >
              <i className="bx bx-menu icon-single"></i>
            </button>

            <div className="col-md-4 pl-0">
              <NavBarMenu />
            </div>
            <div className="col-10 offset-1 col-md-4 offset-md-0 align-self-center">
              <Link className="navbar-brand" to={"/"}>
                <div className="brand-logo">
                  <img src="/yeeeah-logo.png" alt="Logo" className="img-fluid" />
                </div>
              </Link>
            </div>
            <div className="col-10 offset-1 col-md-4 d-flex flex-row-reverse">
              <ul className="navbar-nav nav-auxiliar ml-auto d-block">
                <li className="nav-item">
                  <CartWidget />
                </li>
              </ul>
            </div>

        </div>
      </nav>

      <SideBarMobileNav />
    </>
  );
}

export default Navbar;
