import React from "react";

const TopBar = () => {
  return (
    <div className="utility-nav d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="small text-left">
              hola@<strong>yeaah.com</strong>  |  (+598) 099 000 000
            </p>
          </div>

          <div className="col-12 col-md-6 text-right">
            <p className="small">
              <strong>50% OFF</strong> en hoteles y traslados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
