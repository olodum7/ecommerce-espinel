import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/Nav/Navbar";

const Rutas = () => {
  const [items, setItems] = useState(0);

  function onAdd(contador) {
    agregarCarrito(contador);
  }

  function agregarCarrito(contador) {
    return setItems(contador);
  }

  const saludo = "¡Experimentá experiencias únicas en destinos y ciudades de todo el mundo!"

  return (
    <BrowserRouter>
      <Navbar agregarCarrito={items} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greetings={saludo}
              onAdd={onAdd}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <ItemListContainer
              greetings={saludo}
              onAdd={onAdd}
            />
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Rutas;
