import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <>
      {carrito.length > 0 && 
        <Link to={"/cart"} className="btn btn-link">
          <i className="bx bxs-cart icon-single"></i>
          <span className="badge badge-danger">{carrito.length}</span>
        </Link>
      }
    </>
  );
};

export default CartWidget;
