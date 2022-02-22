import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";


const ItemDetail = ({ producto }) => {

  return (
    <div className="container text-left mt-5">
      <div className="heading-section">
        <h2>Detalles</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="slider" className="owl-carousel product-slider">
            <div className="item" style={{ height: "550px", overflow: "hidden" }}>
              <img src={producto.pictureURL} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl mt-5">
            <div className="product-info">
              <div className="color-text">{producto.title}</div>
              <h3>{producto.subtitle}</h3>
              <div className="product-price-discount">
                <span>$ {producto.price}</span>
              </div>
            </div>
            <p>{producto.extract}</p>
            <ItemCount stock={7} initial={1} item={producto}/>
            <button className="btn btn-outline-primary mt-3 col-6">Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div className="product-info-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="description-tab"
              data-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="review-tab"
              data-toggle="tab"
              href="#review"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Reviews (0)
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            {producto.description}
          </div>
          <div
            className="tab-pane fade"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
