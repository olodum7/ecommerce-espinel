import React from "react";

const DropDown = () => {
  return (
    <>
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
    </>
  );
};

export default DropDown;
