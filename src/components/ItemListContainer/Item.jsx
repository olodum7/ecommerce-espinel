import React from "react";
import { Link } from "react-router-dom";
import nuevo from "../../images/ui/yeaah_destacado_nuevo.png";
import ultimaOportunidad from "../../images/ui/yeaah_destacado_ultima_oportunidad.png";

const Item = ({ item }) => {
  return (
    <div className="col-11 col-md-4 col-lg-3 text-left mt-5 mb-5 item-card">
      {item.destacado === "Nuevo" && (
        <div className="destacado-nuevo">
          <img src={nuevo} alt="Destino nuevo" className="img-fluid" />
        </div>
      )}
      <figure>
        <Link to={`/item/${item.id}`}>
          <div
            className="mb-4 item-card-img"
            style={{
              background: `url(${item.pictureURL}) no-repeat center / cover`,
            }}
          ></div>
          {item.destacado === "Ultima" && (
            <div className="destacado-ultima-oportunidad">
              <img
                src={ultimaOportunidad}
                alt="Última oportunidad"
                className="img-fluid"
              />
            </div>
          )}
        </Link>
        <figcaption>
          <span className="item-card-title mt-4">{item.title}</span>
          <span className="item-card-subtitle">{item.subtitle}</span>
          <span className="item-card-price">$ {item.price}</span>
        </figcaption>
      </figure>
      <Link
        to={`/item/${item.id}`}
        className="btn btn-default item-card-button"
      >
        Ver más <span>&#8594;</span>
      </Link>
    </div>
  );
};

export default Item;
