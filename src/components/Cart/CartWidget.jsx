import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import carritoIcon from "../../images/ui/yeaah_icon_carrito.png";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <>
      <NavLink to={"/cart"} className={({ isActive }) => (isActive ? 'nav-link pl-0 carrito-boton-activo' : 'nav-link pl-0')}>
        <div className="carrito-boton">
          <img src={carritoIcon} alt="Carrito" className="img-fluid" />
          <span className="badge">{carrito.length}</span>
        </div>
      </NavLink>
    </>
  );
};

export default CartWidget;
