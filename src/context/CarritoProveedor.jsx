import React, { useState, createContext } from "react";

export const CarritoContext = createContext();

const CarritoProveedor = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  return <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>{children}</CarritoContext.Provider>;
};

export default CarritoProveedor;
