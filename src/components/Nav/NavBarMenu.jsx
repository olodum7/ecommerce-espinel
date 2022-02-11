import React from "react";

const NavBarMenu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href=" ">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Destacados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Categoría #1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Categoría #2
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=" "
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categoría #3
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href=" ">
                  Subcategoría #1
                </a>
                <a className="dropdown-item" href=" ">
                  Subcategoría #2
                </a>
                <a className="dropdown-item" href=" ">
                  Subcategoría #3
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMenu;
