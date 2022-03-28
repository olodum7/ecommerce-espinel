import React from "react";
import notFound from "../../images/ui/yeaah_404.png";
import { Link } from "react-router-dom";

const PageNotFound = ({ error }) => {
  return (
    <div className="container no-encontrado">
      <div className="row justify-content-center">
        <div className="col-10">
          <img src={notFound} alt="No encontrado" className="img-fluid" />
          <h1>
            Se nos fue de las manos,
            <br /> con el <span>Yeaaaaaaaaaah!</span>
          </h1>
          <h3>{error} no encontrada</h3>
          <div className="text-center">
            <Link
              to={"/"}
              className='btn btn-default no-encontrado-button'
            >
              Volver a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
