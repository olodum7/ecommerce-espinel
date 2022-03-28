import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";
import PageNotFound from "../UI/PageNotFound";

const ItemDetail = ({ producto }) => {
  return (
    <div className="container-fluid text-left">
      {producto.title === undefined ? (
        <PageNotFound error='Experiencia'/>
      ) : (
        <>
          <div className="row">
            <div
              className="col-12 col-md-5 product-image"
              style={{
                background: `url(${producto.pictureURL}) no-repeat center / cover`,
              }}
            >
            </div>
            <div className="col-10 col-md-5 offset-md-1 product-info">
              <div>
                <h1>{producto.title}</h1>
                <h3>{producto.subtitle}</h3>
                <p>{producto.extract}</p>
                <div className="product-price">
                  <span>$ {producto.price}</span>
                </div>

                <ItemCount stock={producto.stock} initial={1} item={producto} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
