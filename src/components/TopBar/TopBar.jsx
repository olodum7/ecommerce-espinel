import React from "react";

const TopBar = () => {
  return (
    <div className="utility-nav d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="small text-left">
              <i className="bx bx-envelope"></i> logo@ejemplo.com |{" "}
              <i className="bx bx-phone"></i> (+598) 099 000 000
            </p>
          </div>

          <div className="col-12 col-md-6 text-right">
            <p className="small">
              Envío gratis a todo el país con tu compra mayor a $2.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
