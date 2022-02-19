import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-6 col-md-3 text-left mb-5">
      <figure>
        <div className="mb-2" style={{ height: "300px", overflow: "hidden" }}>
          <img src={item.pictureURL} className="w-100 mb-2" />
        </div>
        <figcaption>
          <span className="color-text">{item.title}</span>
          <span className="place-name">{item.description}</span>
          <span className="price">$ {item.price}</span>
        </figcaption>
      </figure>
      <Link to={`/item/${item.id}`} className="btn btn-default btn-primary">Ver más</Link>
    </div>
  );
};

export default Item;
