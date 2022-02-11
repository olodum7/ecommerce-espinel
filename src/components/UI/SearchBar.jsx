import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar d-block d-md-none">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="form-inline mb-3 mx-auto">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
