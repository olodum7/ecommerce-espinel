import React from 'react';

function Navbar() {
    return <>
  <div class="overlay"></div>
  <div className="utility-nav d-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <p className="small text-left"><i className="bx bx-envelope"></i> logo@ejemplo.com | <i className="bx bx-phone"></i> (+598) 099 000 000
        </p>
      </div>

      <div className="col-12 col-md-6 text-right">
        <p className="small">Envío gratis a todo el país con tu compra mayor a $2.000</p>
      </div>
    </div>
  </div>
</div>

<nav className="navbar navbar-expand-md navbar-light bg-light main-menu" style={{boxShadow:"none"}}>
  <div className="container">

    <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
                <i className="bx bx-menu icon-single"></i>
            </button>

    <a className="navbar-brand" href=" ">
      <h4 className="font-weight-bold">Logo</h4>
    </a>

    <ul className="navbar-nav ml-auto d-block d-md-none">
      <li className="nav-item">
        <a className="btn btn-link" href=" "><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
      </li>
    </ul>

    <div className="collapse navbar-collapse">
      <form className="form-inline my-2 my-lg-0 mx-auto">
        <input className="form-control" type="search" placeholder="Buscar productos..." ariaLabel="Search" />
        <button className="btn btn-success my-2 my-sm-0" type="submit"><i className="bx bx-search"></i></button>
      </form>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="btn btn-link" href=" "><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
        </li>
        <li className="nav-item ml-md-3">
          <a className="btn btn-primary" href=" "><i className="bx bxs-user-circle mr-1"></i> Log In / Register</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

<nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href=" ">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Destacados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Categoría #1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Categoría #2</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-toggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
          Categoría #3
                        </a>
          <div className="dropdown-menu" ariaLabelledby="navbarDropdown">
            <a className="dropdown-item" href=" ">Subcategoría #1</a>
            <a className="dropdown-item" href=" ">Subcategoría #2</a>
            <a className="dropdown-item" href=" ">Subcategoría #3</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="search-bar d-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form className="form-inline mb-3 mx-auto">
          <input className="form-control" type="search" placeholder="Buscar productos..." ariaLabel="Search" />
          <button className="btn btn-success" type="submit"><i className="bx bx-search"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>

<nav id="sidebar" className="text-left">
  <div className="sidebar-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 pl-0">
          <a className="btn btn-primary" href=" "><i className="bx bxs-user-circle mr-1"></i> Log In</a>
        </div>

        <div className="col-2 text-left">
          <button type="button" id="sidebarCollapseX" className="btn btn-link">
                            <i className="bx bx-x icon-single"></i>
                        </button>
        </div>
      </div>
    </div>
  </div>

  <ul className="list-unstyled components links">
    <li className="active">
      <a href=" "><i className="bx bx-home mr-3"></i> Home</a>
    </li>
    <li>
      <a href=" "><i className="bx bx-carousel mr-3"></i> Destacados</a>
    </li>
    <li>
      <a href=" "><i className="bx bx-book-open mr-3"></i> Categoría #1</a>
    </li>
    <li>
      <a href=" "><i className="bx bx-crown mr-3"></i> Categoría #2</a>
    </li>
    <li>
      <a href="pageSubmenu" dataToggle="collapse" ariaExpanded="false" className="dropdown-toggle"><i className="bx bx-help-circle mr-3"></i>
      Categoría #3</a>
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
      <a href=" "><i className="bx bx-phone mr-3"></i> Contacto</a>
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

  <ul class="social-icons">
    <li><a href="#" target="_blank" title=""><i class="bx bxl-facebook-square"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-twitter"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-linkedin"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-instagram"></i></a></li>
  </ul>

</nav>
    </>;
}

export default Navbar;