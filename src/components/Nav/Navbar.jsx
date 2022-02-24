import React from "react";
import CartWidget from "../Cart/CartWidget";
import LogInButton from "../UI/LogInButton";
import NavBarMenu from "./NavBarMenu";
import SearchBar from "../UI/SearchBar";
import SideBarMobileNav from "./SideBarMobileNav";
import TopBar from "../TopBar/TopBar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="overlay"></div>

      <TopBar />

      <nav
        className="navbar navbar-expand-md navbar-light bg-light main-menu"
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

          <Link className="navbar-brand" to={"/"}>
            <h4 className="font-weight-bold">Tempo</h4>
          </Link>

          <ul className="navbar-nav ml-auto d-block d-md-none">
            <li className="nav-item">
              
                <CartWidget />

            </li>
          </ul>

          <div className="collapse navbar-collapse">
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <input
                className="form-control"
                type="search"
                placeholder="Busca tu próxima experiencia..."
                aria-label="Search"
              />
              <button className="btn btn-success my-2 my-sm-0" type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>

            <ul className="navbar-nav">
              <li className="nav-item">

                  <CartWidget />

              </li>
              <li className="nav-item ml-md-3">
                <LogInButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <NavBarMenu />

      <SearchBar />

      <SideBarMobileNav />
    </>
  );
}

export default Navbar;
