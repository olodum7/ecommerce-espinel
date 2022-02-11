import React from "react";

const CartWidget = ({agregarCarrito}) => {

  return (
    <a className="btn btn-link" href=" ">
      <i className="bx bxs-cart icon-single"></i>{" "}
      <span className="badge badge-danger">{agregarCarrito}</span>
    </a>
  );
};

export default CartWidget;
