import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mx-auto">
      <div className="container">
        <div className="row justify-content-center">


          <div className="col-7 col-md-3">
            <Link className="navbar-brand" to={"/"}>
              <div className="brand-logo">
                <img
                  src="/yeeeah-logo-footer.png"
                  alt="Logo"
                  className="img-fluid"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
