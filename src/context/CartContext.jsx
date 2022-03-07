import React, { useState, createContext } from "react";

export const CarritoContext = createContext();

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const [orderID, setOrderID] = useState('');

  const agregarAlCarrito = (item) => {
    const validar = isInCart(item.id);

    if (validar === undefined) {
      return setCarrito([...carrito, item]);
    }

    return "Ya está en el carrito";
  };

  const isInCart = (item) => {
    return carrito.find((compra) => compra.id === item);
  };

  const removeItem = (itemId) => {
    const eliminarExperiencia = carrito.findIndex((item) => item.id === itemId);

    carrito.splice(eliminarExperiencia, 1);

    return setCarrito([...carrito]);
  };

  const clear = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, removeItem, clear, orderID, setOrderID }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartContext;
